import { Gift, Award, Target, UserPlus, MessageCircle, Sparkles, ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react';
export default function ProgramTypesPage() {
 return (
 <div className="w-full">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 أنواع أدوات الولاء في BOND IT
 </h1>
 <p className="text-xl text-gray-500">
 أدوات متعددة يمكنك دمجها لبناء برنامج يناسب متجرك
 </p>
 </div>
 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-6">
 <p className="text-black font-semibold mb-2"> مرونة كاملة:</p>
 <p className="text-black mb-2">
 BOND IT لا يفرض عليك برنامجًا واحدًا.
 بل يوفر لك أدوات مختلفة يمكنك دمجها لبناء برنامج يناسب طبيعة متجرك.
 </p>
 <p className="text-black font-semibold text-sm">
 يمكنك استخدام أداة واحدة فقط، أو الجمع بينها حسب استراتيجيتك.
 </p>
 </div>
 <div className="space-y-8 my-8 not-prose">
 {/* Tool 1: Points & Rewards */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-6">
 <div className="flex items-center gap-4 mb-2">
 <div className="size-12 bg-white/20 rounded-none flex items-center justify-center">
 <Gift className="size-7 text-white" />
 </div>
 <h3 className="text-2xl font-bold text-white">1⃣ النقاط والمكافآت</h3>
 </div>
 <p className="text-white/80 text-lg">الأساس الذي يُبنى عليه برنامج الولاء</p>
 </div>
 <div className="p-6">
 <p className="text-black mb-4">
 كل عملية شراء تمنح العميل نقاطًا.
 يمكن استبدال النقاط بمكافآت على شكل كوبونات.
 </p>
 <div className="bg-gray-50 rounded-3xl p-5 mb-4">
 <p className="font-semibold text-black mb-3">متى تستخدمها؟</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا كنت تريد رفع تكرار الشراء</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا كانت منتجاتك قابلة لإعادة الشراء</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا كنت تريد نظامًا بسيطًا وسهل الفهم</span>
 </div>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="font-semibold mb-2 text-black">لماذا تعتبر الأساس؟</p>
 <p className="text-black text-sm">
 لأنها تربط كل عملية شراء بمكافأة مستقبلية، مما يمنح العميل سببًا دائمًا للعودة.
 </p>
 </div>
 </div>
 </div>
 {/* Tool 2: Badges & Tiers */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-6">
 <div className="flex items-center gap-4 mb-2">
 <div className="size-12 bg-white/20 rounded-none flex items-center justify-center">
 <Award className="size-7 text-white" />
 </div>
 <h3 className="text-2xl font-bold text-white">2⃣ الشارات والمستويات</h3>
 </div>
 <p className="text-white/80 text-lg">لبناء طبقة عملاء VIP</p>
 </div>
 <div className="p-6">
 <p className="text-black mb-4">
 يمكنك إنشاء مستويات (فضي – ذهبي – VIP) بناءً على:
 </p>
 <div className="grid md:grid-cols-3 gap-3 mb-4">
 <div className="p-3 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">إجمالي الإنفاق</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">عدد النقاط</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">عدد الزيارات</p>
 </div>
 </div>
 <p className="text-sm text-gray-500 mb-4 bg-gray-50 rounded-3xl p-3">
 كل مستوى يمنح مزايا إضافية.
 </p>
 <div className="bg-gray-50 rounded-3xl p-5 mb-4">
 <p className="font-semibold text-black mb-3">متى تستخدمها؟</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا كان لديك عملاء متكررون</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا أردت مكافأة كبار العملاء</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا كنت تبني علامة تجارية طويلة المدى</span>
 </div>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="font-semibold mb-2 text-black">الهدف منها</p>
 <p className="text-black text-sm">
 تحفيز العملاء على الوصول للمستوى التالي وزيادة إنفاقهم تدريجيًا.
 </p>
 </div>
 </div>
 </div>
 {/* Tool 3: Challenges */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-6">
 <div className="flex items-center gap-4 mb-2">
 <div className="size-12 bg-white/20 rounded-none flex items-center justify-center">
 <Target className="size-7 text-white" />
 </div>
 <h3 className="text-2xl font-bold text-white">3⃣ التحديات</h3>
 </div>
 <p className="text-white/80 text-lg">حملات تحفيزية قصيرة المدى</p>
 </div>
 <div className="p-6">
 <p className="text-black mb-4">
 التحديات أداة مخصصة لحملات محددة بفترة زمنية.
 </p>
 <div className="bg-gray-50 rounded-3xl p-5 mb-4">
 <p className="font-semibold text-black mb-3">مثال:</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black p-3 bg-white rounded-none hover:bg-gray-50 transition-colors">
 <ArrowRight className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>أكمل 3 طلبات خلال شهر</span>
 </div>
 <div className="flex items-start gap-2 text-black p-3 bg-white rounded-none hover:bg-gray-50 transition-colors">
 <ArrowRight className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>أنفق 1500 ريال خلال 20 يومًا</span>
 </div>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-5 mb-4">
 <p className="font-semibold text-black mb-3">متى تستخدمها؟</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>عند إطلاق منتج جديد</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>في المواسم</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>لتحفيز فئة معينة من العملاء</span>
 </div>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="font-semibold mb-2 text-black">الهدف منها</p>
 <p className="text-black text-sm">
 توجيه السلوك الشرائي نحو هدف محدد خلال فترة معينة.
 </p>
 </div>
 </div>
 </div>
 {/* Tool 4: Referral Program */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-6">
 <div className="flex items-center gap-4 mb-2">
 <div className="size-12 bg-white/20 rounded-none flex items-center justify-center">
 <UserPlus className="size-7 text-white" />
 </div>
 <h3 className="text-2xl font-bold text-white">4⃣ برنامج الإحالة</h3>
 </div>
 <p className="text-white/80 text-lg">نمو عبر عملائك الحاليين</p>
 </div>
 <div className="p-6">
 <p className="text-black mb-4">
 كل عميل يحصل على رابط خاص.
 عند إتمام أول طلب من شخص مدعو، يحصل على مكافأة.
 </p>
 <div className="bg-gray-50 rounded-3xl p-5 mb-4">
 <p className="font-semibold text-black mb-3">متى تستخدمه؟</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا كنت تريد تقليل الاعتماد على الإعلانات</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>إذا كانت علامتك تعتمد على التوصية</span>
 </div>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="font-semibold mb-2 text-black">الهدف منه</p>
 <p className="text-black text-sm">
 تحويل عملائك إلى مسوقين لك بطريقة طبيعية.
 </p>
 </div>
 </div>
 </div>
 {/* Tool 5: Automated Messages */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-6">
 <div className="flex items-center gap-4 mb-2">
 <div className="size-12 bg-white/20 rounded-none flex items-center justify-center">
 <MessageCircle className="size-7 text-white" />
 </div>
 <h3 className="text-2xl font-bold text-white">5⃣ الرسائل التلقائية</h3>
 </div>
 <p className="text-white/80 text-lg">تعزيز التفاعل</p>
 </div>
 <div className="p-6">
 <p className="text-black mb-4">
 يمكن إرسال رسائل تلقائية عند:
 </p>
 <div className="grid md:grid-cols-2 gap-3 mb-4">
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> ترقية مستوى</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> إكمال تحدي</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> استبدال مكافأة</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black">⏰ اقتراب العميل من مكافأة</p>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="font-semibold mb-2 text-black">الهدف منها</p>
 <p className="text-black text-sm">
 الحفاظ على تفاعل العميل وعدم نسيان متجرك.
 </p>
 </div>
 </div>
 </div>
 {/* Tool 6: AI Assistant */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-6">
 <div className="flex items-center gap-4 mb-2">
 <div className="size-12 bg-white/20 rounded-none flex items-center justify-center">
 <Sparkles className="size-7 text-white" />
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-white">6⃣ المساعد الذكي</h3>
 <span className="inline-block mt-1 px-3 py-1 bg-white/20 text-white text-sm rounded-full font-semibold">
 Plus & Pro
 </span>
 </div>
 </div>
 <p className="text-white/80 text-lg">دعم تسويقي إضافي</p>
 </div>
 <div className="p-6">
 <p className="text-black mb-4">
 مساعد يساعدك في:
 </p>
 <div className="grid md:grid-cols-2 gap-3 mb-4">
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> كتابة محتوى SEO</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> وصف المنتجات</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> أفكار حملات</p>
 </div>
 <div className="p-3 bg-gray-50 rounded-none">
 <p className="text-black"> كابشنات للسوشيال</p>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="font-semibold mb-2 text-black">الهدف منه</p>
 <p className="text-black text-sm">
 دعمك تسويقيًا إلى جانب نظام الولاء.
 </p>
 </div>
 </div>
 </div>
 </div>
 <h2 id="how-to-choose">كيف تختار الأداة المناسبة؟</h2>
 <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
 <div className="p-5 bg-white rounded-none hover:bg-gray-50 transition-colors">
 <p className="font-semibold text-black mb-2">إذا كنت في بداية متجرك:</p>
 <p className="text-black">ابدأ بـ <strong>النقاط والمكافآت</strong>.</p>
 </div>
 <div className="p-5 bg-white rounded-none hover:bg-gray-50 transition-colors">
 <p className="font-semibold text-black mb-2">إذا لديك عملاء متكررون:</p>
 <p className="text-black">أضف <strong>المستويات</strong>.</p>
 </div>
 <div className="p-5 bg-white rounded-none hover:bg-gray-50 transition-colors">
 <p className="font-semibold text-black mb-2">إذا تطلق منتجات باستمرار:</p>
 <p className="text-black">استخدم <strong>التحديات</strong>.</p>
 </div>
 <div className="p-5 bg-white rounded-none hover:bg-gray-50 transition-colors">
 <p className="font-semibold text-black mb-2">إذا تريد نمو أسرع:</p>
 <p className="text-black">فعّل <strong>برنامج الإحالة</strong>.</p>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <div className="flex items-start gap-4">
 <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
 <div>
 <h3 className="text-xl font-bold text-black mb-3">نصيحة استراتيجية</h3>
 <p className="text-black mb-2">
 لا تبدأ بكل الأدوات دفعة واحدة.
 </p>
 <p className="text-black font-semibold">
 ابدأ بسيطًا، ثم أضف الأدوات تدريجيًا حسب تفاعل عملائك.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}