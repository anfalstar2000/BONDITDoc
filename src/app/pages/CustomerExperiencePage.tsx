import { ShoppingBag, Bell, TrendingUp, Gift, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
export default function CustomerExperiencePage() {
 return (
 <div className="w-full">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 رحلة العميل
 </h1>
 <p className="text-xl text-gray-500">
 كيف يعيش عميلك تجربة ولاء حقيقية داخل متجرك
 </p>
 </div>
 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <p className="text-black mb-4">
 دعنا نتخيل رحلة عميل في متجر إلكتروني يستخدم BOND IT.
 </p>
 <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-none">
 <div className="size-16 bg-[#3B82F6] rounded-full flex items-center justify-center text-3xl">
 </div>
 <div>
 <p className="text-2xl font-bold text-black">أحمد</p>
 <p className="text-gray-500">عميل في متجر عطور إلكتروني</p>
 </div>
 </div>
 </div>
 {/* Journey Steps */}
 <div className="space-y-8 my-8 not-prose">
 {/* Step 1: First Order */}
 <div className="relative">
 <div className="flex gap-6">
 <div className="flex flex-col items-center">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center shrink-0">
 <ShoppingBag className="size-6 text-white" />
 </div>
 <div className="w-0.5 h-full bg-gray-50 mt-2"></div>
 </div>
 <div className="flex-1 pb-8">
 <h3 className="text-2xl font-bold text-black mb-2">1⃣ أول طلب</h3>
 <p className="text-black mb-4">
 أحمد يزور متجرك ويشتري عطرًا بقيمة 300 ريال.
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5 mb-4">
 <p className="font-semibold text-black mb-3">بعد إتمام الطلب:</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يتم احتساب النقاط تلقائيًا</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>تُضاف النقاط إلى حسابه</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يرى رصيده داخل صفحة الولاء</span>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5">
 <p className="text-sm font-semibold text-black mb-2"> أحمد يفكر:</p>
 <p className="text-black italic mb-3">
 "حلو، كل عملية شراء تعطيني نقاط. خلني أتابع كم أجمع."
 </p>
 <div className="bg-gray-50 rounded-3xl p-3">
 <p className="text-sm text-black font-semibold">
 النتيجة: أصبح لديه سبب للعودة.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {/* Step 2: Engagement */}
 <div className="relative">
 <div className="flex gap-6">
 <div className="flex flex-col items-center">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center shrink-0">
 <Bell className="size-6 text-white" />
 </div>
 <div className="w-0.5 h-full bg-gray-50 mt-2"></div>
 </div>
 <div className="flex-1 pb-8">
 <h3 className="text-2xl font-bold text-black mb-2">2⃣ بعد أيام: تفاعل</h3>
 <p className="text-black mb-4">
 أحمد يتلقى إشعارًا بأن لديه نقاط يمكن استخدامها لاحقًا.
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5 mb-4">
 <p className="text-black">
 الرسالة ليست خصمًا مباشرًا، بل تذكير بقيمة يملكها بالفعل.
 </p>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5">
 <p className="text-sm font-semibold text-black mb-2"> يفكر:</p>
 <p className="text-black italic mb-3">
 "باقي لي عدد بسيط من النقاط وأوصل للمكافأة."
 </p>
 <div className="bg-gray-50 rounded-3xl p-3">
 <p className="text-sm text-black font-semibold">
 النتيجة: يبدأ يفكر في الطلب التالي من نفس المتجر بدل البحث عن منافس.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {/* Step 3: Approaching Reward */}
 <div className="relative">
 <div className="flex gap-6">
 <div className="flex flex-col items-center">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center shrink-0">
 <TrendingUp className="size-6 text-white" />
 </div>
 <div className="w-0.5 h-full bg-gray-50 mt-2"></div>
 </div>
 <div className="flex-1 pb-8">
 <h3 className="text-2xl font-bold text-black mb-2">3⃣ اقتراب من المكافأة</h3>
 <p className="text-black mb-4">
 أحمد أصبح قريبًا من عدد النقاط المطلوبة لاستبدال خصم.
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5 mb-4">
 <p className="font-semibold text-black mb-3">عندها قد:</p>
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <ArrowRight className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يزيد قيمة سلة مشترياته قليلًا</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <ArrowRight className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>أو يقرر إتمام الشراء الآن بدل التأجيل</span>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5">
 <div className="bg-gray-50 rounded-3xl p-3">
 <p className="text-sm text-black font-semibold">
 النتيجة: ارتفاع متوسط الطلب بطريقة طبيعية.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {/* Step 4: Redeeming Reward */}
 <div className="relative">
 <div className="flex gap-6">
 <div className="flex flex-col items-center">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center shrink-0">
 <Gift className="size-6 text-white" />
 </div>
 <div className="w-0.5 h-full bg-gray-50 mt-2"></div>
 </div>
 <div className="flex-1 pb-8">
 <h3 className="text-2xl font-bold text-black mb-2">4⃣ استبدال المكافأة</h3>
 <p className="text-black mb-4">
 عند وصوله للعدد المطلوب:
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5 mb-4">
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يستبدل النقاط</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يحصل على كوبون</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يستخدمه في طلب جديد</span>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5">
 <p className="text-sm font-semibold text-black mb-2"> يفكر:</p>
 <p className="text-black italic mb-3">
 "رجعت اشتريت واستفدت من نقاطي."
 </p>
 <div className="bg-gray-50 rounded-3xl p-3">
 <p className="text-sm text-black font-semibold">
 النتيجة: دورة شراء جديدة تبدأ.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 {/* Step 5: Tier Upgrade */}
 <div className="relative">
 <div className="flex gap-6">
 <div className="flex flex-col items-center">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center shrink-0">
 <Award className="size-6 text-white" />
 </div>
 </div>
 <div className="flex-1">
 <h3 className="text-2xl font-bold text-black mb-2">5⃣ الترقية لمستوى أعلى (إن وجد)</h3>
 <p className="text-black mb-4">
 إذا كان لديك نظام مستويات:
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-5 mb-4">
 <div className="space-y-2">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يتم ترقيته تلقائيًا</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يحصل على مزايا إضافية</span>
 </div>
 </div>
 </div>
 <div className="bg-[#3B82F6] rounded-none text-white p-6">
 <p className="text-lg font-semibold mb-2">
 الآن لم يعد مجرد عميل…
 </p>
 <p className="text-white/80">
 بل عميل يشعر بقيمته داخل متجرك.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 <h2 id="what-changed">ماذا تغيّر في الرحلة؟</h2>
 <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
 <div className="bg-gray-50 rounded-3xl p-6">
 <h3 className="text-lg font-bold text-black mb-4">قبل برنامج الولاء:</h3>
 <div className="space-y-3">
 <div className="flex items-start gap-2 text-gray-500">
 <span className="text-gray-500 font-bold"></span>
 <span>يشتري مرة</span>
 </div>
 <div className="flex items-start gap-2 text-gray-500">
 <span className="text-gray-500 font-bold"></span>
 <span>قد لا يعود</span>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6">
 <h3 className="text-lg font-bold text-black mb-4">بعد تفعيل BOND IT:</h3>
 <div className="space-y-3">
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يرى تقدمًا</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>ينتظر مكافأة</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يسعى لمستوى أعلى</span>
 </div>
 <div className="flex items-start gap-2 text-black">
 <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
 <span>يعود ليستخدم ما كسبه</span>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-[#3B82F6] rounded-none text-white p-6 my-8 not-prose text-center">
 <p className="text-xl font-bold mb-2">
 الفرق ليس في الخصم…
 </p>
 <p className="text-white/80 text-lg">
 بل في وجود سبب واضح للعودة.
 </p>
 </div>
 <h2 id="conclusion">الخلاصة</h2>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors p-6 my-8 not-prose">
 <p className="text-black text-lg mb-4">
 رحلة العميل مع BOND IT ليست مجرد نقاط.
 </p>
 <p className="text-black font-semibold text-lg mb-6">
 هي نظام يبني تكرار الشراء تدريجيًا، دون الحاجة لخصومات عشوائية مستمرة.
 </p>
 <div className="bg-gray-50 rounded-3xl p-5">
 <p className="text-black mb-2">
 وأنت لا تحتاج إدارة يومية معقدة.
 </p>
 <p className="text-black font-bold">
 النظام يتابع كل شيء تلقائيًا، وأنت تراقب النتائج.
 </p>
 </div>
 </div>
 </div>
 </div>
 );
}
