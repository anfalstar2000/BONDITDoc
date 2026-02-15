import { Award, Star, Trophy, TrendingUp, Gift, MessageCircle, Power, CheckCircle2, Play, Lightbulb, Crown } from 'lucide-react';

export default function BadgesTiersPage() {
 return (
 <div className="max-w-4xl">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 الشارات والمستويات
 </h1>
 <p className="text-xl text-gray-500">
 أداة لبناء ولاء طويل المدى داخل متجرك
 </p>
 </div>

 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <p className="text-black text-lg mb-4">
 توفر صفحة الشارات والمستويات في نظام BOND IT أداة لبناء ولاء طويل المدى داخل متجرك، من خلال ترقية العملاء تلقائيًا بناءً على نشاطهم ومنحهم مزايا إضافية كلما ارتفع مستواهم.
 </p>
 <p className="text-black font-semibold">
 هذه الميزة لا تعتمد على مكافأة عملية شراء واحدة فقط، بل تبني علاقة مستمرة مع العملاء الأكثر تفاعلًا وإنفاقًا.
 </p>
 </div>

 <h2 id="what-is-tiers">ما هو نظام المستويات؟</h2>

 <p>
 نظام المستويات يسمح لك بتقسيم عملائك إلى فئات مثل:
 </p>

 <div className="grid grid-cols-3 gap-4 my-6 not-prose">
 <div className="bg-white rounded-none border border-gray-100 p-5 text-center">
 <div className="size-12 bg-[#939393] rounded-full flex items-center justify-center mx-auto mb-3">
 <Star className="size-6 text-white" />
 </div>
 <p className="font-bold text-black text-lg">Silver</p>
 </div>
 <div className="bg-white rounded-none border border-gray-100 p-5 text-center">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3">
 <Award className="size-6 text-white" />
 </div>
 <p className="font-bold text-black text-lg">Gold</p>
 </div>
 <div className="bg-white rounded-none border border-gray-100 p-5 text-center">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3">
 <Crown className="size-6 text-white" />
 </div>
 <p className="font-bold text-black text-lg">VIP</p>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-6 not-prose">
 <div className="space-y-3 text-black">
 <div className="flex items-start gap-3">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>ويتم نقل العميل من مستوى إلى آخر <strong>تلقائيًا</strong> عند تحقيق شروط محددة.</span>
 </div>
 <div className="flex items-start gap-3">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>كل مستوى يمنح مزايا مختلفة، مما يشجع العميل على الاستمرار في الشراء للوصول إلى المستوى التالي.</span>
 </div>
 </div>
 </div>

 <h2 id="overview">أولًا: نظرة عامة على الصفحة</h2>

 <p>
 في صفحة الشارات والمستويات يمكنك:
 </p>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-6 not-prose">
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">عرض جميع المستويات الحالية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">معرفة حالة كل مستوى (مفعل أو متوقف).</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">تعديل أي مستوى.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">إضافة مستوى جديد.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
 <p className="text-black">إدارة إعدادات رسائل الترقية.</p>
 </div>
 </div>
 </div>

 <h2 id="create-tier">ثانيًا: إضافة مستوى جديد</h2>

 <p>
 عند الضغط على "إضافة مستوى"، تبدأ عملية إنشاء مستوى جديد بخطوات واضحة.
 </p>

 {/* Tier Setup Steps */}
 <div className="space-y-6 my-8 not-prose">
 {/* Step 1: General Details */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Star className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">1) التفاصيل العامة للمستوى</h4>
 </div>
 <p className="text-white/80">في هذا القسم تقوم بتحديد:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">اسم المستوى (يظهر للعميل).</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">وصف مختصر يوضح مزايا المستوى.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">طريقة احتساب الترقية.</p>
 </div>

 <div className="bg-gray-50 rounded-none p-5 mt-4">
 <p className="text-black font-semibold mb-4">طرق احتساب الترقية المتاحة</p>
 <p className="text-black mb-3">يمكنك اختيار الترقية بناءً على:</p>
 <div className="space-y-2 mb-4">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span><strong>إجمالي المشتريات</strong> (قيمة الإنفاق).</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span><strong>عدد النقاط</strong> التي جمعها العميل.</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span><strong>عدد الزيارات</strong> أو الطلبات.</span>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-4">
 <p className="text-black font-semibold mb-2">اختيار الطريقة يعتمد على هدفك:</p>
 <div className="space-y-2 text-sm text-black">
 <p>• إذا أردت زيادة الإنفاق اختر <strong>المشتريات</strong>.</p>
 <p>• إذا أردت ربطها بالنقاط اختر <strong>النقاط</strong>.</p>
 <p>• إذا أردت زيادة التفاعل اختر <strong>الزيارات</strong>.</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Step 2: Entry Conditions */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <TrendingUp className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">2) شروط الدخول للمستوى</h4>
 </div>
 <p className="text-white/80">في هذه الخطوة تحدد الشرط الذي يجب أن يحققه العميل ليتم ترقيته تلقائيًا.</p>
 </div>
 <div className="p-6 space-y-4">
 <div className="bg-gray-50 rounded-none p-5">
 <p className="text-black font-semibold mb-3">أمثلة:</p>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <Trophy className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">إنفاق 2000 ريال للانتقال إلى المستوى الذهبي.</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <Trophy className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">جمع 3000 نقطة للانتقال إلى مستوى أعلى.</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <Trophy className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">إتمام عدد معين من الطلبات.</p>
 </div>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4">
 <p className="font-semibold text-black"> تلقائي بالكامل:</p>
 <p className="text-black text-sm">
 عند تحقيق الشرط، يتم نقل العميل تلقائيًا دون تدخل يدوي.
 </p>
 </div>
 </div>
 </div>

 {/* Step 3: Tier Benefits */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Gift className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">3) مزايا المستوى</h4>
 </div>
 <p className="text-white/80">كل مستوى يمكن ربطه بمزايا إضافية يحصل عليها العميل عند وصوله إليه.</p>
 </div>
 <div className="p-6 space-y-4">
 <p className="text-black font-semibold">أمثلة على المزايا:</p>
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-4 bg-gray-50 rounded-none">
 <div className="flex items-start gap-2 text-black">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <span>خصم دائم بنسبة محددة.</span>
 </div>
 </div>
 <div className="p-4 bg-gray-50 rounded-none">
 <div className="flex items-start gap-2 text-black">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <span>شحن مجاني.</span>
 </div>
 </div>
 <div className="p-4 bg-gray-50 rounded-none">
 <div className="flex items-start gap-2 text-black">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <span>نقاط مضاعفة على كل طلب.</span>
 </div>
 </div>
 <div className="p-4 bg-gray-50 rounded-none">
 <div className="flex items-start gap-2 text-black">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <span>منتج مجاني عند الشراء.</span>
 </div>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4">
 <p className="text-black text-sm">
 تظهر هذه المزايا داخل تجربة العميل، مما يعزز شعوره بالتقدير والانتماء.
 </p>
 </div>
 </div>
 </div>

 {/* Step 4: Upgrade Message */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <MessageCircle className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">4) إعدادات رسالة الترقية</h4>
 </div>
 <p className="text-white/80">يمكنك تفعيل رسالة تلقائية يتم إرسالها عند ترقية العميل إلى مستوى جديد.</p>
 </div>
 <div className="p-6 space-y-4">
 <p className="text-black font-semibold">يمكن تخصيص:</p>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">عنوان الرسالة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">نص الرسالة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">إدراج عناصر ديناميكية مثل اسم العميل واسم المستوى.</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4">
 <p className="font-semibold mb-2 text-black"> الهدف من الرسالة:</p>
 <p className="text-black text-sm">
 تعزيز الشعور بالإنجاز وتشجيع الاستمرار.
 </p>
 </div>
 </div>
 </div>

 {/* Step 5: Activation */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Power className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">5) تفعيل أو إيقاف المستوى</h4>
 </div>
 <p className="text-white/80">يمكنك:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">تفعيل المستوى ليصبح متاحًا للعملاء.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">إيقافه مؤقتًا دون حذفه.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">تعديله في أي وقت حسب استراتيجيتك.</p>
 </div>
 </div>
 </div>
 </div>

 <h2 id="smart-usage">كيف تستخدم المستويات بشكل ذكي؟</h2>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <h4 className="text-xl font-bold text-black mb-6 text-center">مثال عملي</h4>
 
 <div className="grid md:grid-cols-3 gap-4">
 {/* Silver Tier */}
 <div className="bg-gray-50 rounded-none overflow-hidden">
 <div className="bg-[#939393] p-4 text-center">
 <div className="size-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-2">
 <Star className="size-6 text-white" />
 </div>
 <h5 className="font-bold text-white text-lg">Silver</h5>
 </div>
 <div className="p-4">
 <p className="text-sm text-gray-500 text-center mb-3 font-semibold">من 0 إلى 1500 ريال</p>
 <div className="bg-white rounded-none border border-gray-100 p-3">
 <p className="text-sm text-black text-center">مزايا أساسية</p>
 </div>
 </div>
 </div>

 {/* Gold Tier */}
 <div className="bg-gray-50 rounded-none overflow-hidden">
 <div className="bg-[#3B82F6] p-4 text-center">
 <div className="size-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-2">
 <Award className="size-6 text-white" />
 </div>
 <h5 className="font-bold text-white text-lg">Gold</h5>
 </div>
 <div className="p-4">
 <p className="text-sm text-gray-500 text-center mb-3 font-semibold">من 1500 إلى 5000 ريال</p>
 <div className="bg-white rounded-none border border-gray-100 p-3">
 <p className="text-sm text-black text-center">خصم أكبر + نقاط مضاعفة</p>
 </div>
 </div>
 </div>

 {/* VIP Tier */}
 <div className="bg-gray-50 rounded-none overflow-hidden">
 <div className="bg-[#3B82F6] p-4 text-center">
 <div className="size-12 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-2">
 <Crown className="size-6 text-white" />
 </div>
 <h5 className="font-bold text-white text-lg">VIP</h5>
 </div>
 <div className="p-4">
 <p className="text-sm text-gray-500 text-center mb-3 font-semibold">أكثر من 5000 ريال</p>
 <div className="bg-white rounded-none border border-gray-100 p-3">
 <p className="text-sm text-black text-center">شحن مجاني دائم + مزايا حصرية</p>
 </div>
 </div>
 </div>
 </div>

 <div className="mt-6 bg-gray-50 rounded-none p-5">
 <p className="text-black font-semibold mb-3">بهذا الأسلوب:</p>
 <div className="space-y-2 text-black">
 <div className="flex items-start gap-2">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>العميل يرى تقدمًا واضحًا</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>لديه هدف للوصول للمستوى التالي</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يزيد إنفاقه تدريجيًا</span>
 </div>
 </div>
 </div>
 </div>

 <h2 id="difference">الفرق بين النقاط والمستويات</h2>

 <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
 <div className="bg-white rounded-none border border-gray-100 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Gift className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">النقاط</h4>
 </div>
 <p className="text-black text-center text-lg">تحفّز كل عملية شراء.</p>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Award className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">المستويات</h4>
 </div>
 <p className="text-black text-center text-lg">تحفّز السلوك طويل المدى.</p>
 </div>
 </div>

 <div className="bg-[#3B82F6] text-white p-6 rounded-none my-8 not-prose">
 <p className="text-xl font-bold mb-4 text-center">
 عند الجمع بينهما، تحصل على نظام متكامل:
 </p>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-white/20 p-4 rounded-none text-center">
 <p className="font-semibold">نقاط لكل طلب</p>
 </div>
 <div className="bg-white/20 p-4 rounded-none text-center">
 <p className="font-semibold">مستوى أعلى كلما زاد النشاط</p>
 </div>
 </div>
 </div>

 <h2 id="tips">نصائح عملية</h2>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <div className="flex items-start gap-4 mb-6">
 <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
 <h3 className="text-xl font-bold text-black">نصائح لإدارة فعّالة</h3>
 </div>
 
 <div className="space-y-4">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">لا تكثر عدد المستويات حتى لا يصبح النظام معقدًا.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">اجعل الفروقات بين المستويات واضحة ومغرية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">لا تمنح أعلى مستوى بسهولة، ليبقى له قيمة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">راقب عدد العملاء في كل مستوى لتقييم فعالية الشروط.</p>
 </div>
 </div>
 </div>

 {/* Video Placeholder */}
 <div className="bg-white rounded-none border border-gray-100 overflow-hidden my-8 not-prose">
 <div className="aspect-video bg-gray-50 flex items-center justify-center relative">
 <div className="text-center">
 <div className="size-20 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
 <Play className="size-10 text-white mr-[-4px]" />
 </div>
 <p className="text-black font-semibold text-lg">شرح فيديو: إعداد الشارات والمستويات</p>
 <p className="text-gray-500 text-sm mt-2">سيتم إضافة الفيديو قريبًا</p>
 </div>
 </div>
 <div className="p-5 bg-white">
 <p className="text-gray-500 text-sm text-center">
 شاهد شرح عملي خطوة بخطوة لإعداد نظام المستويات في متجرك
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}