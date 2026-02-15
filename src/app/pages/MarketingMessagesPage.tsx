import { Mail, Send, Bell, MessageSquare, Award, CheckCircle2, Play, Lightbulb, Sparkles, TrendingUp, Shield, Edit3 } from 'lucide-react';

export default function MarketingMessagesPage() {
 return (
 <div className="max-w-4xl">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 الرسائل التسويقية
 </h1>
 <p className="text-xl text-gray-500">
 رسائل تلقائية مرتبطة بتفاعل العملاء مع برنامج الولاء
 </p>
 </div>

 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <p className="text-black text-lg mb-4">
 توفر صفحة الرسائل التسويقية في BOND IT إمكانية إرسال رسائل تلقائية للعملاء بناءً على تفاعلهم مع برنامج الولاء.
 </p>
 <p className="text-black font-semibold mb-4">
 هذه الرسائل لا تُستخدم للإرسال العشوائي، بل ترتبط بأحداث محددة داخل النظام مثل ترقية مستوى، إكمال تحدي، أو استبدال مكافأة.
 </p>
 <p className="text-black">
 الهدف منها هو تعزيز التفاعل، وتذكير العميل بقيمته داخل متجرك، وتشجيعه على العودة.
 </p>
 </div>

 <h2 id="what-is-messages">ما هي الرسائل التسويقية في BOND IT؟</h2>

 <p>
 هي رسائل يتم إرسالها تلقائيًا عند تحقق شرط معين داخل النظام.
 </p>

 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Bell className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">على سبيل المثال:</h3>
 </div>
 
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">عند ترقية العميل إلى مستوى جديد.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">عند إكمال تحدي.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">عند استبدال مكافأة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">عند اقتراب العميل من الوصول إلى مكافأة.</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-lg p-4 mt-4">
 <p className="font-semibold text-center text-black">
 كل رسالة يمكن تخصيصها لتناسب هوية متجرك.
 </p>
 </div>
 </div>

 <h2 id="overview">أولًا: نظرة عامة على الصفحة</h2>

 <p>
 من صفحة الرسائل التسويقية يمكنك:
 </p>

 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-6 not-prose">
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">تفعيل أو إيقاف أي رسالة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">تعديل محتوى الرسالة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">تخصيص عنوان ونص الرسالة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">معاينة الرسالة قبل تفعيلها.</p>
 </div>
 </div>
 </div>

 {/* Message Types and Customization */}
 <div className="space-y-6 my-8 not-prose">
 {/* Message Types */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <MessageSquare className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">1) أنواع الرسائل المتاحة</h4>
 </div>
 <p className="text-white/80">ترتبط الرسائل عادةً بالأحداث التالية:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <div className="flex-1">
 <p className="text-black font-semibold">رسالة ترقية مستوى</p>
 <p className="text-gray-500 text-sm mt-1">عند انتقال العميل إلى مستوى ولاء أعلى</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <div className="flex-1">
 <p className="text-black font-semibold">رسالة إكمال تحدي</p>
 <p className="text-gray-500 text-sm mt-1">عند نجاح العميل في إتمام تحدي معين</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <div className="flex-1">
 <p className="text-black font-semibold">رسالة تأكيد استبدال مكافأة</p>
 <p className="text-gray-500 text-sm mt-1">عند استبدال العميل لنقاطه بمكافأة</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <div className="flex-1">
 <p className="text-black font-semibold">رسالة تذكير بنقاط قريبة من الاستبدال</p>
 <p className="text-gray-500 text-sm mt-1">عندما يقترب العميل من الحصول على مكافأة</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-lg p-4">
 <p className="font-semibold text-black"> ملاحظة مهمة:</p>
 <p className="text-black text-sm">
 كل رسالة تعمل عند تحقق الحدث المرتبط بها فقط.
 </p>
 </div>
 </div>
 </div>

 {/* Content Customization */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Edit3 className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">2) تخصيص محتوى الرسالة</h4>
 </div>
 <p className="text-white/80">يمكنك تعديل:</p>
 </div>
 <div className="p-6 space-y-4">
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
 <p className="text-black">استخدام عناصر ديناميكية تُستبدل تلقائيًا ببيانات حقيقية.</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-lg p-5">
 <div className="flex items-center gap-2 mb-4">
 <Sparkles className="size-5 text-[#3B82F6]" />
 <p className="text-black font-semibold">أمثلة للعناصر الديناميكية:</p>
 </div>
 <div className="grid md:grid-cols-2 gap-3">
 <div className="p-3 bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 text-center">
 <p className="text-sm text-black font-mono">اسم العميل</p>
 </div>
 <div className="p-3 bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 text-center">
 <p className="text-sm text-black font-mono">اسم المستوى</p>
 </div>
 <div className="p-3 bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 text-center">
 <p className="text-sm text-black font-mono">عنوان التحدي</p>
 </div>
 <div className="p-3 bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 text-center">
 <p className="text-sm text-black font-mono">عدد النقاط المكتسبة</p>
 </div>
 <div className="p-3 bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 text-center">
 <p className="text-sm text-black font-mono">رصيد النقاط الحالي</p>
 </div>
 <div className="p-3 bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 text-center">
 <p className="text-sm text-black font-mono">اسم المتجر</p>
 </div>
 </div>
 </div>

 <div className="bg-gray-50 rounded-lg p-4">
 <p className="text-black text-sm">
 هذه العناصر تُملأ تلقائيًا ببيانات حقيقية عند إرسال الرسالة، مما يعطي طابعًا شخصيًا.
 </p>
 </div>
 </div>
 </div>

 {/* Message Example */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Award className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">3) مثال على رسالة</h4>
 </div>
 <p className="text-white/80">رسالة ترقية مستوى:</p>
 </div>
 <div className="p-6 space-y-4">
 <div className="bg-gray-50 rounded-lg p-5">
 <p className="text-black font-semibold mb-3">العنوان:</p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-4">
 <p className="text-black"> مبروك! وصلت لمستوى جديد</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-lg p-5">
 <p className="text-black font-semibold mb-3">النص:</p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-4">
 <p className="text-black leading-relaxed">
 مرحبًا <strong className="text-[#3B82F6]">[اسم العميل]</strong> 👋<br /><br />
 تهانينا! لقد تمت ترقيتك إلى مستوى <strong className="text-[#3B82F6]">[اسم المستوى]</strong> في <strong>[اسم المتجر]</strong>.<br /><br />
 رصيدك الحالي: <strong className="text-[#3B82F6]">[رصيد النقاط]</strong> نقطة.<br /><br />
 استمتع بمزاياك الجديدة! 
 </p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-lg p-4">
 <p className="text-black text-sm">
 الكلمات بين [] سيتم استبدالها تلقائيًا ببيانات العميل الحقيقية.
 </p>
 </div>
 </div>
 </div>

 {/* Channel Selection */}
 <div className="rounded-none overflow-hidden bg-white">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
 <Send className="size-6 text-white" />
 </div>
 <h4 className="text-xl font-bold text-white">4) قنوات الإرسال</h4>
 </div>
 <p className="text-white/80">يمكن إرسال الرسائل عبر:</p>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <div>
 <p className="text-black font-semibold">البريد الإلكتروني</p>
 <p className="text-gray-500 text-sm">يصل للبريد الشخصي للعميل.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <div>
 <p className="text-black font-semibold">رسائل SMS (حسب الباقة)</p>
 <p className="text-gray-500 text-sm">تصل كرسالة نصية للهاتف.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <div>
 <p className="text-black font-semibold">إشعارات داخل لوحة الولاء</p>
 <p className="text-gray-500 text-sm">يراها العميل عند دخول لوحة الولاء الخاصة به.</p>
 </div>
 </div>
 </div>
 </div>
 </div>

 <h2 id="why-messages">لماذا تُعتبر الرسائل التسويقية مهمة؟</h2>

 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <TrendingUp className="size-8 text-[#3B82F6]" />
 <h3 className="text-xl font-bold text-black">الفوائد الأساسية</h3>
 </div>
 
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <div>
 <p className="text-black font-semibold">تعزيز التفاعل</p>
 <p className="text-gray-500 text-sm">تذكير العميل بأنه عضو في برنامج الولاء.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <div>
 <p className="text-black font-semibold">تشجيع الزيارة</p>
 <p className="text-gray-500 text-sm">الرسالة تدفع العميل للعودة للمتجر.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <div>
 <p className="text-black font-semibold">تعزيز الشعور بالتقدير</p>
 <p className="text-gray-500 text-sm">العميل يشعر بأنك تهتم بتقدمه.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <div>
 <p className="text-black font-semibold">زيادة معدل الاستبدال</p>
 <p className="text-gray-500 text-sm">التذكير بقرب الحصول على مكافأة يرفع من احتمالية الشراء.</p>
 </div>
 </div>
 </div>
 </div>

 <h2 id="best-practices">أفضل الممارسات</h2>

 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <Shield className="size-8 text-[#3B82F6]" />
 <h3 className="text-xl font-bold text-black">نصائح مهمة</h3>
 </div>
 
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">لا تُكثر من إرسال الرسائل حتى لا تزعج العميل.</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">اجعل اللغة بسيطة ومباشرة وودية.</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">استخدم الإيموجي بحذر لإضفاء طابع إيجابي.</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">تأكد من اختبار الرسالة قبل تفعيلها.</span>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span className="text-black">احترم خصوصية العميل ولا ترسل رسائل غير مرتبطة بنشاطه.</span>
 </div>
 </div>
 </div>

 <h2 id="tips">نصائح عملية</h2>

 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <div className="flex items-start gap-4 mb-6">
 <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
 <h3 className="text-xl font-bold text-black">نصائح لإدارة فعّالة</h3>
 </div>
 
 <div className="space-y-4">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">ابدأ بتفعيل الرسائل الأساسية مثل رسالة ترقية المستوى ورسالة إكمال التحدي.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">اجعل نص الرسالة قصيرًا ومباشرًا، لا أحد يحب الرسائل الطويلة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">استخدم العناصر الديناميكية لتخصيص الرسالة لكل عميل.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">راقب معدل فتح الرسائل لتقييم مدى فعاليتها.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
 <p className="text-black">لا تنسَ وضع رابط واضح للعودة إلى المتجر داخل الرسالة.</p>
 </div>
 </div>
 </div>

 {/* Video Placeholder */}
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 overflow-hidden my-8 not-prose">
 <div className="aspect-video bg-gray-50 flex items-center justify-center relative">
 <div className="text-center">
 <div className="size-20 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
 <Play className="size-10 text-white mr-[-4px]" />
 </div>
 <p className="text-black font-semibold text-lg">شرح فيديو: إعداد الرسائل التسويقية</p>
 <p className="text-gray-500 text-sm mt-2">سيتم إضافة الفيديو قريبًا</p>
 </div>
 </div>
 <div className="p-5 bg-white">
 <p className="text-gray-500 text-sm text-center">
 شاهد شرح عملي خطوة بخطوة لإنشاء وتخصيص الرسائل التسويقية في متجرك
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}