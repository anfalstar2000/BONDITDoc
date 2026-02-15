import { Download, ShoppingCart, Gift, BarChart3, CheckCircle2, Zap, Settings, TrendingUp } from 'lucide-react';

export default function HowItWorksPage() {
 return (
 <div className="max-w-4xl">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 كيف يعمل النظام؟
 </h1>
 <p className="text-xl text-gray-500">
 4 خطوات واضحة، وكل شيء يتم تلقائيًا داخل متجرك الإلكتروني
 </p>
 </div>

 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none border border-gray-100 p-6 my-6">
 <p className="text-black font-semibold mb-2"> نقطة مهمة:</p>
 <p className="text-black">
 تم تصميم BOND IT ليعمل بسلاسة بعد تثبيت التطبيق، دون الحاجة لأي تدخل يدوي في كل عملية.
 </p>
 </div>

 <div className="space-y-8 my-8 not-prose">
 {/* Step 1 */}
 <div className="relative">
 <div className="flex items-start gap-6">
 <div className="shrink-0">
 <div className="size-16 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Download className="size-8 text-white" />
 </div>
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-black mb-3">
 1⃣ تثبيت التطبيق وربط المتجر
 </h3>
 <p className="text-black mb-4">
 بعد تثبيت BOND IT من متجر تطبيقات سلة:
 </p>
 <div className="space-y-3 mb-4">
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يتم ربط متجرك تلقائيًا بالنظام</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يتم مزامنة الطلبات</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يتم احتساب النقاط بشكل آلي بعد كل عملية شراء</span>
 </div>
 </div>
 <div className="bg-white rounded-none border border-gray-100 p-4">
 <p className="text-sm text-black">
 <strong>مهم:</strong> لا يحتاج العميل إلى تسجيل منفصل أو إدخال بيانات إضافية خارج متجرك.
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Step 2 */}
 <div className="relative">
 <div className="flex items-start gap-6">
 <div className="shrink-0">
 <div className="size-16 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <ShoppingCart className="size-8 text-white" />
 </div>
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-black mb-3">
 2⃣ العميل يشتري ويجمع نقاط
 </h3>
 <p className="text-black mb-4">
 عند إتمام أي طلب في متجرك:
 </p>
 <div className="space-y-3 mb-4">
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يتم احتساب النقاط تلقائيًا</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">تُضاف النقاط إلى حساب العميل</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يمكن للعميل متابعة رصيده من خلال صفحة الولاء</span>
 </div>
 </div>
 
 <div className="bg-white rounded-none border border-gray-100 p-6">
 <p className="font-semibold text-black mb-4">مثال:</p>
 <p className="text-black mb-3">إذا حددت 1 نقطة لكل 1 ريال:</p>
 <div className="space-y-3">
 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-none">
 <span className="text-black">شراء بقيمة 100 ريال</span>
 <span className="font-bold text-[#3B82F6]">100 نقطة</span>
 </div>
 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-none">
 <span className="text-black">شراء بقيمة 250 ريال</span>
 <span className="font-bold text-[#3B82F6]">250 نقطة</span>
 </div>
 </div>
 <p className="text-sm text-black mt-4 font-semibold">
 كل شيء يتم تلقائيًا بدون أي تدخل منك.
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Step 3 */}
 <div className="relative">
 <div className="flex items-start gap-6">
 <div className="shrink-0">
 <div className="size-16 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Gift className="size-8 text-white" />
 </div>
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-black mb-3">
 3⃣ استبدال النقاط بمكافآت
 </h3>
 <p className="text-black mb-4">
 عندما يصل العميل إلى عدد النقاط المطلوب:
 </p>
 <div className="space-y-3 mb-4">
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يمكنه استبدالها بمكافأة</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يتم إصدار كوبون تلقائيًا</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">يستخدم الكوبون في طلبه القادم</span>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-6">
 <p className="font-semibold text-black mb-4">أمثلة للمكافآت:</p>
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> خصم بقيمة محددة</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black">📦 شحن مجاني</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> منتج مجاني</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black">💵 كاش باك على شكل كوبون</p>
 </div>
 </div>
 <p className="text-sm text-black mt-4">
 <strong> مرونة كاملة:</strong> يمكنك أنت تحديد شروط كل مكافأة وحدود استخدامها.
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Step 4 */}
 <div className="relative">
 <div className="flex items-start gap-6">
 <div className="shrink-0">
 <div className="size-16 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <BarChart3 className="size-8 text-white" />
 </div>
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-black mb-3">
 4⃣ أنت تتابع الأداء وتطور البرنامج
 </h3>
 <p className="text-black mb-4">
 من لوحة التحكم يمكنك معرفة:
 </p>
 <div className="grid md:grid-cols-2 gap-3 mb-4">
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <TrendingUp className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">عدد العملاء المشاركين في البرنامج</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <TrendingUp className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">إجمالي النقاط الموزعة</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <TrendingUp className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">معدل الاستبدال</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <TrendingUp className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">أداء المكافآت</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100 md:col-span-2">
 <TrendingUp className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">العملاء الأكثر نشاطًا</span>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-6">
 <p className="font-semibold text-black mb-4">بناءً على هذه البيانات يمكنك:</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <Settings className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>تعديل قيمة النقاط</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <Settings className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إطلاق تحديات</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <Settings className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إنشاء مستوى جديد</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <Settings className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>تغيير المكافآت حسب الموسم</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 <h2 id="no-manual">هل يحتاج العميل تسجيل يدوي؟</h2>
 <p className="text-3xl font-bold text-black">لا.</p>
 <p>
 العميل يتفاعل مع برنامج الولاء من داخل متجرك الإلكتروني نفسه، دون الحاجة لتطبيق إضافي
 أو تسجيل منفصل خارج تجربة الشراء.
 </p>

 <h2 id="what-makes-different">ماذا يميز BOND IT؟</h2>

 <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
 <div className="flex items-start gap-3 p-5 bg-white rounded-none border border-gray-100">
 <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"></div>
 <span className="text-black font-semibold">يعمل تلقائيًا بعد التثبيت</span>
 </div>
 <div className="flex items-start gap-3 p-5 bg-white rounded-none border border-gray-100">
 <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"></div>
 <span className="text-black font-semibold">لا يحتاج إدارة يدوية يومية</span>
 </div>
 <div className="flex items-start gap-3 p-5 bg-white rounded-none border border-gray-100">
 <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"></div>
 <span className="text-black font-semibold">يمكنك تعديل الإعدادات في أي وقت</span>
 </div>
 <div className="flex items-start gap-3 p-5 bg-white rounded-none border border-gray-100">
 <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"></div>
 <span className="text-black font-semibold">مصمم خصيصًا للمتاجر الإلكترونية</span>
 </div>
 </div>

 <div className="bg-[#3B82F6] rounded-none text-white p-6 my-8 text-center not-prose">
 <p className="text-2xl font-bold mb-3">جاهز للخطوة التالية؟</p>
 <p className="text-white/80 mb-6">
 تعرف على الميزات الأساسية وابدأ بناء برنامج الولاء الخاص بك
 </p>
 <button className="px-6 py-3 bg-white text-[#3B82F6] font-semibold rounded-none hover:bg-gray-50 transition-colors">
 استكشف الميزات
 </button>
 </div>
 </div>
 </div>
 );
}