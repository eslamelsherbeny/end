// ✅ lib/translations.ts - النسخة الشاملة النهائية لجميع صفحات الموقع
export type TranslationKey = keyof typeof translations.en

export const translations = {
  ar: {
    // === التنقل والقوائم ===
    home: 'الرئيسية',
    shop: 'المتجر',
    abayas: 'عباءات',
    hijabs: 'حجاب',
    dresses: 'فساتين',
    sales: 'التخفيضات',
    cart: 'السلة',
    wishlist: 'المفضلة',
    account: 'حسابي',
    login: 'تسجيل الدخول',
    signup: 'إنشاء حساب',
    logout: 'تسجيل الخروج',
    categories: 'الأقسام',
    brandName: 'أيمن بشير',

    // === البحث والتحميل ===
    search: 'ابحث عن المنتجات...',
    searchProducts: 'ابحث عن المنتجات...',
    loading: 'جاري التحميل...',
    noResults: 'لا توجد نتائج',
    results: 'نتائج',

    // === الحساب والطلبات (مهم لصفحة Orders) ===
    myOrders: 'طلباتي',               // ✅ موجود
    orderNumber: 'رقم الطلب',          // ✅ موجود
    orderConfirmation: 'تأكيد الطلب',   // ✅ موجود
    noOrders: 'لم تقم بإجراء أي طلبات بعد', // ✅ موجود
    viewDetails: 'عرض التفاصيل',       // ✅ موجود
    orderDate: 'تاريخ الطلب',
    status: 'الحالة',
    totalAmount: 'الإجمالي',
    pending: 'قيد الانتظار',           // ✅ موجود
    processing: 'جاري التجهيز',        // ✅ موجود
    shipped: 'تم الشحن',              // ✅ موجود
    delivered: 'تم التوصيل',           // ✅ موجود
    cancelled: 'ملغي',                // ✅ موجود
    cash: 'دفع عند الاستلام',           // ✅ موجود
    card: 'بطاقة ائتمان',              // ✅ موجود
    tryAgain: 'حاول البحث بفلتر آخر',

    // === سلة التسوق (Cart) ===
    shoppingCart: 'سلة التسوق',
    cartEmpty: 'لا توجد منتجات حالياً',   // ✅ موجود
    emptyCart: 'السلة فارغة',
    startShopping: 'ابدأ التسوق الآن',   // ✅ موجود
    orderSummary: 'ملخص الطلب',
    subtotal: 'المجموع الفرعي',
    total: 'الإجمالي',
    shipping: 'الشحن',
    currency: 'جنيه',

    // === تسجيل الدخول وإنشاء الحساب ===
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    welcomeBack: 'مرحباً بعودتك',
    loginSuccess: 'تم تسجيل الدخول بنجاح',
    signupSuccess: 'تم إنشاء الحساب بنجاح',
    error: 'خطأ',
    success: 'تم بنجاح',

    // === أخرى ===
    edit: 'تعديل',
    next: 'التالي',
    previous: 'السابق',
    saveAddress: 'حفظ العنوان',
    shippingAddress: 'عنوان الشحن',
    qualityProducts: 'خامات عالية الجودة'
  },

  en: {
    home: 'Home',
    shop: 'Shop',
    abayas: 'Abayas',
    hijabs: 'Hijabs',
    dresses: 'Dresses',
    sales: 'Sales',
    cart: 'Cart',
    wishlist: 'Wishlist',
    account: 'Account',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    categories: 'Categories',
    brandName: 'Ayman Besher',

    search: 'Search products...',
    searchProducts: 'Search products...',
    loading: 'Loading...',
    noResults: 'No results found',
    results: 'Results',

    myOrders: 'My Orders',
    orderNumber: 'Order Number',
    orderConfirmation: 'Order Confirmation',
    noOrders: 'You have no orders yet',
    viewDetails: 'View Details',
    orderDate: 'Order Date',
    status: 'Status',
    totalAmount: 'Total Amount',
    pending: 'Pending',
    processing: 'Processing',
    shipped: 'Shipped',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
    cash: 'Cash on Delivery',
    card: 'Credit Card',
    tryAgain: 'Try another filter',

    shoppingCart: 'Shopping Cart',
    cartEmpty: 'Your cart is empty',
    emptyCart: 'Empty Cart',
    startShopping: 'Start Shopping Now',
    orderSummary: 'Order Summary',
    subtotal: 'Subtotal',
    total: 'Total',
    shipping: 'Shipping',
    currency: 'EGP',

    email: 'Email Address',
    password: 'Password',
    fullName: 'Full Name',
    phone: 'Phone Number',
    welcomeBack: 'Welcome Back',
    loginSuccess: 'Login Successful',
    signupSuccess: 'Signup Successful',
    error: 'Error',
    success: 'Success',

    edit: 'Edit',
    next: 'Next',
    previous: 'Previous',
    saveAddress: 'Save Address',
    shippingAddress: 'Shipping Address',
    qualityProducts: 'Quality Products'
  }
}
