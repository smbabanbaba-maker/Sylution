// ============================================
// SYLUTION LTD - SUPABASE INTEGRATION
// ============================================

// 1. Supabase Configuration
const SUPABASE_URL = 'https://aeioqnwigtbyobkgwzrl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-U-bIOHd_Zzhs5X2cgtjjQ_XTbH3p7j';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ============================================
// 2. MARKETPLACE FUNCTIONS (market.html)
// ============================================

async function loadMarketProducts() {
    const container = document.getElementById('product-container');
    if (!container) return; // Idan ba mu cikin market page ba

    container.innerHTML = '<div class="col-span-full text-center py-10"><p>Ana loda kayayyaki...</p></div>';

    try {
        const { data, error } = await supabase
            .from('products')
            .select('*')
            .eq('is_available', true)
            .order('created_at', { ascending: false });

        if (error) throw error;

        container.innerHTML = ''; // Share loading message

        if (data.length === 0) {
            container.innerHTML = '<div class="col-span-full text-center py-10"><p>Babu kayayyaki a yanzu.</p></div>';
            return;
        }

        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'bg-surface-container-lowest rounded-xl overflow-hidden border border-on-surface/5 transition-all hover:shadow-lg group flex flex-col';
            
            // Idan babu hoto, yi amfani da emoji
            const imageHtml = product.image_url 
                ? `<img class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="${product.image_url}" alt="${product.name}"/>`
                : `<div class="w-full h-full flex items-center justify-center text-4xl bg-surface-container"></div>`;

            card.innerHTML = `
                <div class="relative aspect-square w-full bg-surface-container-high overflow-hidden">
                    ${imageHtml}
                    ${product.is_featured ? '<div class="absolute top-1 left-1 bg-secondary text-white px-1.5 py-0.5 rounded-full"><span class="text-[8px] font-bold uppercase tracking-wider">Featured</span></div>' : ''}
                </div>
                <div class="p-2 flex-1 flex flex-col">                    <h3 class="text-label-sm text-primary mb-1 line-clamp-2 h-8">${product.name}</h3>
                    <div class="mt-auto">
                        <span class="text-body-md font-bold text-secondary block mb-2">₦${Number(product.price).toLocaleString()}</span>
                        <button class="w-full py-1.5 btn-buy-gradient text-on-primary text-[10px] font-bold rounded-full flex items-center justify-center gap-1 active:scale-95" onclick="openOrderModal('${product.name}', '₦${Number(product.price).toLocaleString()}')">
                            <span class="material-symbols-outlined text-[14px]">shopping_cart</span> Buy
                        </button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Error loading products:', error);
        container.innerHTML = '<div class="col-span-full text-center py-10 text-error"><p>An samu matsala wajen loda kayayyaki.</p></div>';
    }
}

// ============================================
// 3. ORDER FUNCTIONS (market.html)
// ============================================

async function confirmOrder() {
    const productName = document.getElementById('modal-product-name').textContent;
    const productPrice = document.getElementById('modal-product-price').textContent;
    const phoneInput = document.querySelector('#order-modal input[type="tel"]');
    const phoneNumber = phoneInput ? phoneInput.value.trim() : '';

    if (!phoneNumber) {
        alert('Da fatan za a sanya lambar wayar WhatsApp.');
        return;
    }

    const btn = document.querySelector('#order-modal .btn-buy-gradient');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Ana sarrafa odar...';
    btn.disabled = true;

    try {
        // Save order to Supabase
        const { data, error } = await supabase
            .from('orders')
            .insert([{
                product_name: productName, // Note: You might need to add this column or use product_id
                total_price: parseFloat(productPrice.replace(/[₦,]/g, '')),
                buyer_phone: phoneNumber,
                status: 'pending',
                payment_status: 'unpaid'
            }])
            .select();
        if (error) throw error;

        // Show success toast
        const toast = document.getElementById('toast');
        if (toast) {
            toast.classList.remove('opacity-0', 'translate-y-[-20px]');
            toast.classList.add('opacity-100', 'translate-y-0');
        }

        // Open WhatsApp
        const message = `Sannu SYLUTION! Ina son saya: ${productName} (Farashi: ${productPrice}). Lambar tuntuɓar ta: ${phoneNumber}`;
        setTimeout(() => {
            window.open(`https://wa.me/2349063436048?text=${encodeURIComponent(message)}`, '_blank');
            closeOrderModal();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);

    } catch (error) {
        console.error('Error creating order:', error);
        alert('An samu matsala. Da fatan za a gwada daga baya.');
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// ============================================
// 4. AUTHENTICATION FUNCTIONS (login.html)
// ============================================

async function handleLogin() {
    const email = document.getElementById('identifier').value;
    const password = document.getElementById('password').value;
    const btn = document.querySelector('form button[type="submit"]');
    
    if (!email || !password) {
        alert('Da fatan za a cika email da password.');
        return;
    }

    const originalText = btn.textContent;
    btn.textContent = 'Ana shiga...';
    btn.disabled = true;

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) throw error;

        btn.textContent = '✓ An shiga!';
        btn.style.background = '#006e1c';
        
        setTimeout(() => {
            window.location.href = 'profile.html'; // Redirect to profile
        }, 1500);

    } catch (error) {
        console.error('Login error:', error);
        alert('Email ko password ba daidai ba ne.');
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        window.location.href = 'login.html';
    }
}

// ============================================
// 5. PROFILE FUNCTIONS (profile.html)
// ============================================

async function loadUserProfile() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        // window.location.href = 'login.html'; // Uncomment to force login
        return;
    }

    // Update UI with user data
    const emailEl = document.querySelector('input[type="email"]');
    if (emailEl) emailEl.value = user.email;
}

// ============================================
// 6. INITIALIZATION (Run on page load)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Check which page we are on and run appropriate function
    if (document.getElementById('product-container')) {
        loadMarketProducts();
    }    if (document.getElementById('identifier') && document.getElementById('password')) {
        // We are on login page, attach listener to form
        const form = document.querySelector('form');
        if (form) {
            form.onsubmit = (e) => {
                e.preventDefault();
                handleLogin();
            };
        }
    }
    if (document.querySelector('.order-card')) {
        loadUserProfile();
    }
});
