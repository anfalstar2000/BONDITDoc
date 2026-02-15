import { Target, Trophy, Calendar, Gift, MessageCircle, CheckCircle2, Play, Lightbulb, Zap, TrendingUp, Clock, Users } from 'lucide-react';

export default function ChallengesPage() {
 return (
 <div className="max-w-4xl">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 التحديات
 </h1>
 <p className="text-xl text-gray-500">
 أداة تحفيزية قصيرة المدى لتوجيه سلوك العملاء نحو هدف محدد
 </p>
 </div>

 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <p className="text-black text-lg mb-4">
 توفر صفحة التحديات في نظام BOND IT أداة تحفيزية قصيرة المدى تساعدك على توجيه سلوك العملاء نحو هدف محدد خلال فترة زمنية معينة.
 </p>
 <p className="text-black font-semibold">
 على عكس النقاط والمستويات التي تعمل بشكل دائم، التحديات تُستخدم كحملات مؤقتة لرفع المبيعات أو زيادة التفاعل في وقت معين.
 </p>
 </div>

 <h2 id="what-is-challenges">ما هي التحديات؟</h2>

 <p>
 التحدي هو هدف محدد تمنحه لعملائك، وعند إكماله يحصلون على مكافأة.
 </p>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Target className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">مثال:</h3>
 </div>
 
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Trophy className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">أكمل <strong>3 طلبات</strong> خلال 30 يومًا.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Trophy className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">أنفق <strong>1500 ريال</strong> خلال أسبوعين.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Trophy className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">زر المتجر <strong>5 مرات</strong>.</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4 mt-4">
 <p className="font-semibold text-center text-black">
 عند تحقيق الهدف، يحصل العميل على نقاط إضافية أو مكافأة محددة.
 </p>
 </div>
 </div>

 <h2 id="overview">أولًا: نظرة عامة على الصفحة</h2>

 <p>
 في صفحة التحديات يمكنك:
 </p>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-6 not-prose">
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">عرض جميع التحديات الحالية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">معرفة حالة كل تحدٍ (نشط – قادم – متوقف – منتهٍ).</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">إضافة تحدٍ جديد.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">تعديل أو إيقاف أي تحدٍ.</p>
 </div>
 </div>
 </div>

 <h2 id="create-challenge">إضافة تحدي جديد</h2>

 <p>
 عند الضغط على "إضافة تحدي"، تمر عملية الإنشاء بعدة أقسام واضحة.
 </p>

 {/* Challenge Setup Steps */}
 <div className="space-y-6 my-8 not-prose">
 {/* Step 1: General Details */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Target className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">1) التفاصيل العامة للتحدي</h4>
 </div>
 <p className="text-white/80">في هذا القسم تحدد هوية التحدي وكيف يظهر للعميل.</p>
 </div>
 <div className="p-6 space-y-5">
 {/* Title */}
 <div className="bg-gray-50 rounded-none p-5">
 <h5 className="text-black font-bold mb-3">عنوان التحدي</h5>
 <p className="text-black mb-3">اسم واضح ومباشر يشرح المطلوب.</p>
 
 <div className="bg-white rounded-none border border-gray-100 p-4 mb-3">
 <p className="text-black font-semibold mb-2">أمثلة:</p>
 <div className="space-y-2">
 <div className="bg-gray-50 rounded-none p-3 text-black">أكمل 3 طلبات</div>
 <div className="bg-gray-50 rounded-none p-3 text-black">أنفق 2000 ريال</div>
 <div className="bg-gray-50 rounded-none p-3 text-black">تحدي الإطلاق الجديد</div>
 </div>
 </div>

 <p className="text-sm text-black italic">
 العنوان يجب أن يكون سهل الفهم ويشرح الهدف بدون تعقيد.
 </p>
 </div>

 {/* Type */}
 <div className="bg-gray-50 rounded-none p-5">
 <h5 className="text-black font-bold mb-3">نوع التحدي</h5>
 <p className="text-black mb-3">تحدد هنا طريقة احتساب التقدم، مثل:</p>
 
 <div className="space-y-2">
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <span className="text-black">عدد الطلبات</span>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <span className="text-black">قيمة الإنفاق</span>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <span className="text-black">عدد الزيارات</span>
 </div>
 </div>

 <p className="text-sm text-black italic mt-3">
 اختر النوع بناءً على هدفك التسويقي.
 </p>
 </div>

 {/* Description */}
 <div className="bg-gray-50 rounded-none p-5">
 <h5 className="text-black font-bold mb-3">الوصف</h5>
 <p className="text-black">
 نص مختصر يشرح التحدي والمكافأة بشكل أوضح للعميل.
 </p>
 </div>
 </div>
 </div>

 {/* Step 2: Goal & Reward */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Trophy className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">2) الهدف والمكافأة</h4>
 </div>
 <p className="text-white/80">هنا تحدد الشرط المطلوب والمكافأة التي يحصل عليها العميل.</p>
 </div>
 <div className="p-6 space-y-4">
 <div className="bg-gray-50 rounded-none p-5">
 <p className="text-black font-semibold mb-3">الهدف المطلوب</p>
 <p className="text-black mb-3">مثال:</p>
 <div className="space-y-2">
 <div className="flex items-center justify-between p-3 bg-white rounded-none border border-gray-100">
 <span className="text-black">إكمال 3 طلبات</span>
 <Zap className="size-5 text-[#3B82F6]" />
 </div>
 <div className="flex items-center justify-between p-3 bg-white rounded-none border border-gray-100">
 <span className="text-black">الإنفاق 2000 ريال</span>
 <TrendingUp className="size-5 text-[#3B82F6]" />
 </div>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-5">
 <p className="text-black font-semibold mb-3">المكافأة</p>
 <p className="text-black mb-3">يمكنك منح:</p>
 <div className="space-y-2">
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">نقاط إضافية (مثل 500 نقطة).</span>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">كوبون خصم محدد.</span>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">شحن مجاني.</span>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Step 3: Duration */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Calendar className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">3) المدة الزمنية</h4>
 </div>
 <p className="text-white/80">كل تحدي يجب أن يكون له بداية ونهاية محددة.</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">تاريخ البداية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">تاريخ النهاية.</p>
 </div>

 <div className="bg-gray-50 rounded-none p-4 mt-4">
 <p className="text-black text-sm">
 ⏱ اختر مدة مناسبة: لا قصيرة جدًا ولا طويلة جدًا. المدة المثالية غالبًا بين أسبوع وشهر.
 </p>
 </div>
 </div>
 </div>

 {/* Step 4: Target Audience */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Users className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">4) الفئة المستهدفة</h4>
 </div>
 <p className="text-white/80">يمكنك تخصيص التحدي لشريحة معينة من العملاء.</p>
 </div>
 <div className="p-6 space-y-4">
 <p className="text-black font-semibold">خيارات الاستهداف:</p>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">جميع العملاء.</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">عملاء مستوى محدد.</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">مجموعة مخصصة (في باقات Plus و Pro).</span>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4">
 <p className="text-black text-sm">
 استهداف دقيق يعني نتائج أفضل وتكلفة أقل.
 </p>
 </div>
 </div>
 </div>

 {/* Step 5: Notification */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <MessageCircle className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">5) الإشعارات</h4>
 </div>
 <p className="text-white/80">يمكن إرسال رسائل تلقائية عند:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">بداية التحدي.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">إكمال التحدي.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">تذكير قبل انتهاء المدة.</p>
 </div>
 </div>
 </div>
 </div>

 <h2 id="when-to-use">متى تستخدم التحديات؟</h2>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <Clock className="size-8 text-[#3B82F6]" />
 <h3 className="text-xl font-bold text-black">أفضل الأوقات</h3>
 </div>
 
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <div>
 <p className="text-black font-semibold">عند إطلاق منتج جديد</p>
 <p className="text-gray-500 text-sm">لتحفيز العملاء على تجربته.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <div>
 <p className="text-black font-semibold">خلال المواسم</p>
 <p className="text-gray-500 text-sm">مثل رمضان، الجمعة البيضاء، موسم العودة للمدارس.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <div>
 <p className="text-black font-semibold">لتنشيط عملاء غير نشطين</p>
 <p className="text-gray-500 text-sm">إرسال تحدي خاص لهم لتشجيعهم على العودة.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <div>
 <p className="text-black font-semibold">لتصريف مخزون</p>
 <p className="text-gray-500 text-sm">ربط التحدي بمنتجات أو فئة محددة.</p>
 </div>
 </div>
 </div>
 </div>

 <h2 id="difference">الفرق بين التحديات والنقاط</h2>

 <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
 <div className="bg-white rounded-none border border-gray-100 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Gift className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">النقاط</h4>
 </div>
 <p className="text-black text-lg text-center">
 نظام دائم يحفز على كل طلب.
 </p>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Target className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">التحديات</h4>
 </div>
 <p className="text-black text-lg text-center">
 حملة مؤقتة لتحقيق هدف معين.
 </p>
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
 <p className="text-black">لا تطلق عدة تحديات في نفس الوقت حتى لا يتشتت العميل.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">اجعل الهدف قابلًا للتحقيق، لكن ليس سهلًا جدًا.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">راقب معدل الإكمال: إذا كان منخفضًا، قد يكون الهدف صعبًا أو المكافأة غير كافية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">استخدم الإشعارات بذكاء لتذكير العملاء قبل انتهاء المدة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
 <p className="text-black">جرّب أنواع مختلفة من التحديات وقارن النتائج لمعرفة ما يناسب عملائك.</p>
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
 <p className="text-black font-semibold text-lg">شرح فيديو: إعداد التحديات</p>
 <p className="text-gray-500 text-sm mt-2">سيتم إضافة الفيديو قريبًا</p>
 </div>
 </div>
 <div className="p-5 bg-white">
 <p className="text-gray-500 text-sm text-center">
 شاهد شرح عملي خطوة بخطوة لإنشاء تحديات فعّالة في متجرك
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}