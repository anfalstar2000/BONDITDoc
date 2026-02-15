import { Sparkles, Wand2, FileText, Search, MessageCircle, Target, CheckCircle2, Play, Lightbulb, ShoppingBag, TrendingUp, Share2, Zap } from 'lucide-react';
export default function AIAssistantPage() {
 return (
 <div className="max-w-4xl">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 المساعد الذكي
 </h1>
 <p className="text-xl text-gray-500">
 أداة دعم تسويقي مدمجة لإنشاء محتوى احترافي
 </p>
 </div>
 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <p className="text-black text-lg mb-4">
 المساعد الذكي في BOND IT هو أداة دعم تسويقي مدمجة داخل النظام، تساعدك على إنشاء محتوى احترافي مرتبط بمتجرك دون الحاجة للاستعانة بخبير خارجي.
 </p>
 <p className="text-black font-semibold">
 هذه الميزة متاحة ضمن باقات Plus و Pro، وتهدف إلى تسهيل عملية كتابة المحتوى وتحسين ظهور متجرك.
 </p>
 </div>
 <h2 id="role">ما هو دور المساعد الذكي؟</h2>
 <p>
 المساعد الذكي ليس مجرد أداة كتابة عامة، بل أداة تعمل في سياق متجرك، ويمكن استخدامها لإنشاء محتوى يخدم أهدافك التسويقية.
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Wand2 className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">يساعدك في:</h3>
 </div>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">كتابة وصف احترافي للمنتجات.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">إنشاء مقالات لتحسين الظهور في محركات البحث (SEO).</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">كتابة كابشنات للسوشيال ميديا.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">اقتراح أفكار حملات تحفيزية.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
 <p className="text-black">اقتراح أفكار تحديات أو مكافآت.</p>
 </div>
 </div>
 </div>
 {/* AI Features */}
 <div className="space-y-6 my-8 not-prose">
 {/* Product Content */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <ShoppingBag className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">أولًا: إنشاء محتوى للمنتجات</h4>
 </div>
 <p className="text-white/80">يمكنك إدخال معلومات بسيطة عن المنتج، مثل:</p>
 </div>
 <div className="p-6 space-y-4">
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">اسم المنتج</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">الفئة</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">المزايا</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">الجمهور المستهدف</p>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-5">
 <p className="text-black font-semibold mb-3">النتيجة:</p>
 <p className="text-black">
 ويقوم المساعد باقتراح وصف احترافي مناسب للبيع الإلكتروني.
 </p>
 </div>
 <div className="bg-gray-50 rounded-3xl p-5">
 <p className="font-semibold mb-3 text-black"> هذا مفيد إذا كنت:</p>
 <div className="space-y-2 text-sm">
 <div className="flex items-start gap-2">
 <CheckCircle2 className="size-4 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">تطلق منتجًا جديدًا</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle2 className="size-4 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">تريد تحسين صفحة منتج ضعيف الأداء</span>
 </div>
 <div className="flex items-start gap-2">
 <CheckCircle2 className="size-4 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">لا تملك وقتًا لكتابة محتوى تسويقي</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 {/* SEO Articles */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Search className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">ثانيًا: إنشاء مقالات SEO</h4>
 </div>
 <p className="text-white/80">يمكنك طلب:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <FileText className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">أفكار لمقالات مرتبطة بمجالك</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <FileText className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">كتابة مقال متكامل</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <FileText className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">اقتراح كلمات مفتاحية</p>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="font-semibold text-black"> الهدف:</p>
 <p className="text-black text-sm">
 دعم ظهور متجرك في نتائج البحث بطريقة منظمة.
 </p>
 </div>
 </div>
 </div>
 {/* Social Media Content */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Share2 className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">ثالثًا: كابشنات السوشيال ميديا</h4>
 </div>
 <p className="text-white/80">يساعدك على كتابة محتوى جذاب يناسب:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">تويتر / X</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">إنستقرام</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">سناب شات</p>
 </div>
 <div className="p-6 bg-gray-50 rounded-none text-center">
 <p className="text-black font-semibold">تيك توك</p>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="text-black text-sm">
 يمكنك إدخال فكرة بسيطة ويقوم المساعد بإعادة صياغتها بشكل أكثر جاذبية.
 </p>
 </div>
 </div>
 </div>
 {/* Campaign Ideas */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Target className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">رابعًا: اقتراح أفكار تحفيزية</h4>
 </div>
 <p className="text-white/80">يمكن للمساعد:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">اقتراح أنواع تحديات مناسبة لمجالك.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">اقتراح أسماء جذابة للتحديات.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">اقتراح أسماء لمكافآت مبتكرة.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">اقتراح حملات موسمية.</p>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4">
 <p className="text-black text-sm">
 هذا يوفر عليك الوقت والجهد في التفكير الإبداعي.
 </p>
 </div>
 </div>
 </div>
 {/* How to Use */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <MessageCircle className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">كيف تستخدم المساعد؟</h4>
 </div>
 <p className="text-white/80">طريقة الاستخدام بسيطة:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">اختر نوع المحتوى الذي تريد إنشاءه.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">أدخل التفاصيل الأساسية (مثل اسم المنتج أو الموضوع).</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">اضغط على "إنشاء".</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">احصل على اقتراح يمكنك تعديله أو استخدامه مباشرة.</p>
 </div>
 </div>
 </div>
 </div>
 <h2 id="benefits">لماذا تستخدم المساعد الذكي؟</h2>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <TrendingUp className="size-8 text-[#3B82F6]" />
 <h3 className="text-xl font-bold text-black">الفوائد الأساسية</h3>
 </div>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <div>
 <p className="text-black font-semibold">توفير الوقت</p>
 <p className="text-gray-500 text-sm">بدلًا من الجلوس ساعات لكتابة محتوى.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <div>
 <p className="text-black font-semibold">توفير التكلفة</p>
 <p className="text-gray-500 text-sm">بدل التعاقد مع كتّاب محتوى خارجيين.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <div>
 <p className="text-black font-semibold">نصوص احترافية</p>
 <p className="text-gray-500 text-sm">حتى لو لم تكن كاتبًا ماهرًا.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <div>
 <p className="text-black font-semibold">أفكار مستمرة</p>
 <p className="text-gray-500 text-sm">لا تنتهي الأفكار لديك مرة أخرى.</p>
 </div>
 </div>
 </div>
 </div>
 <h2 id="availability">متى يكون المساعد الذكي متاحًا؟</h2>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-4">
 <Sparkles className="size-8 text-[#3B82F6]" />
 <h3 className="text-xl font-bold text-black">الباقات</h3>
 </div>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">متاح ضمن باقة <strong>Plus</strong></span>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">متاح ضمن باقة <strong>Pro</strong></span>
 </div>
 </div>
 <div className="bg-gray-50 rounded-3xl p-4 mt-4">
 <p className="text-black text-sm">
 في الباقات الأعلى، قد يكون هناك حد أعلى لعدد الطلبات الشهرية.
 </p>
 </div>
 </div>
 <h2 id="tips">نصائح للحصول على أفضل النتائج</h2>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <div className="flex items-start gap-4 mb-6">
 <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
 <h3 className="text-xl font-bold text-black">نصائح عملية</h3>
 </div>
 <div className="space-y-4">
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">كلما كانت التفاصيل التي تدخلها دقيقة، كلما كانت النتيجة أفضل.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">لا تستخدم المحتوى كما هو بشكل أعمى، اقرأه وعدّله ليناسب أسلوبك.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">استخدم المساعد كنقطة انطلاق، وليس كبديل كامل عن التفكير.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">جرّب طلب نفس المحتوى بأكثر من طريقة، وقارن النتائج.</p>
 </div>
 <div className="flex items-start gap-3 p-6 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
 <p className="text-black">لا تعتمد على المساعد لكتابة محتوى طبي أو قانوني حساس.</p>
 </div>
 </div>
 </div>
 <h2 id="difference">الفرق بين المساعد الذكي ونظام الولاء</h2>
 <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Zap className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">نظام الولاء</h4>
 </div>
 <p className="text-black text-lg">
 يدير العلاقة مع العملاء داخل المتجر.
 </p>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Sparkles className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">المساعد الذكي</h4>
 </div>
 <p className="text-black text-lg">
 يدعمك في التسويق وإنشاء المحتوى.
 </p>
 </div>
 </div>
 <div className="bg-[#3B82F6] text-white p-6 rounded-none my-8 not-prose">
 <p className="text-xl font-bold mb-4 text-center">
 الاثنان معًا يشكلان حلًا متكاملًا:
 </p>
 <div className="grid md:grid-cols-2 gap-4">
 <div className="bg-white/20 p-4 rounded-none text-center">
 <p className="font-semibold">الولاء يحتفظ بالعملاء</p>
 </div>
 <div className="bg-white/20 p-4 rounded-none text-center">
 <p className="font-semibold">المساعد يساعدك على جذب المزيد</p>
 </div>
 </div>
 </div>
 {/* Video Placeholder */}
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors overflow-hidden my-8 not-prose">
 <div className="aspect-video bg-gray-50 flex items-center justify-center relative">
 <div className="text-center">
 <div className="size-20 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
 <Play className="size-10 text-white mr-[-4px]" />
 </div>
 <p className="text-black font-semibold text-lg">شرح فيديو: استخدام المساعد الذكي</p>
 <p className="text-gray-500 text-sm mt-2">سيتم إضافة الفيديو قريبًا</p>
 </div>
 </div>
 <div className="p-5 bg-white">
 <p className="text-gray-500 text-sm text-center">
 شاهد شرح عملي خطوة بخطوة لاستخدام المساعد الذكي في إنشاء محتوى احترافي
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}