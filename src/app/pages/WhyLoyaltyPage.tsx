import { AlertCircle, DollarSign, TrendingUp, Users, Award, Zap, Target, CheckCircle2 } from 'lucide-react';

export default function WhyLoyaltyPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          لماذا تحتاج نظام ولاء؟
        </h1>
        <p className="text-xl text-[#939393]">
          من الجذب المتكرر إلى الاحتفاظ الذكي
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 id="problem">المشكلة الحقيقية</h2>
        <p>
          في أغلب المتاجر الإلكترونية، العميل يشتري مرة… ثم يختفي.
        </p>

        <div className="bg-white rounded-lg p-6 my-6">
          <div className="space-y-3 text-black">
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm shrink-0">1</div>
              <p>تدفع على إعلانات</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm shrink-0">2</div>
              <p>تجذب عميل جديد</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm shrink-0">3</div>
              <p>يشتري</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#939393] rounded-full flex items-center justify-center text-white text-sm shrink-0">✗</div>
              <p className="font-semibold">ثم يذهب لمتجر آخر في المرة القادمة</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 my-6">
          <p className="text-black font-semibold mb-2">⚠️ الحقيقة:</p>
          <p className="text-black">
            بدون سبب واضح يدفعه للعودة، لن يعود.
          </p>
        </div>

        <h2 id="cost">تكلفة الجذب مقابل الاحتفاظ</h2>
        <p>جذب عميل جديد دائمًا يتطلب:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center gap-2 text-black">
              <DollarSign className="size-5" />
              <span className="font-semibold">إعلانات</span>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center gap-2 text-black">
              <Target className="size-5" />
              <span className="font-semibold">خصومات</span>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center gap-2 text-black">
              <Zap className="size-5" />
              <span className="font-semibold">حملات</span>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center gap-2 text-black">
              <AlertCircle className="size-5" />
              <span className="font-semibold">وقت</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 my-6">
          <p className="text-black font-semibold mb-2">✓ بينما:</p>
          <p className="text-black">
            الاحتفاظ بعميل حالي أسهل وأقل تكلفة… إذا أعطيته سببًا للرجوع.
          </p>
        </div>

        <h2 id="solution">الحل: نظام ولاء مبني على سلوك الشراء</h2>
        <p>
          نظام الولاء في BOND IT لا يعتمد على خصومات عشوائية،
          بل على آلية واضحة:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 not-prose">
          <div className="p-5 bg-white rounded-lg text-center">
            <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3 text-white">
              1
            </div>
            <p className="font-semibold text-black">العميل يكسب نقاط</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center">
            <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3 text-white">
              2
            </div>
            <p className="font-semibold text-black">يرى تقدمه</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center">
            <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3 text-white">
              3
            </div>
            <p className="font-semibold text-black">يحصل على مكافأة</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center">
            <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3 text-white">
              4
            </div>
            <p className="font-semibold text-black">يرتقي لمستوى أعلى</p>
          </div>
          <div className="p-5 bg-white rounded-lg text-center md:col-span-2 lg:col-span-1">
            <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-3 text-white">
              ✓
            </div>
            <p className="font-semibold text-black">يشعر بقيمة ارتباطه بمتجرك</p>
          </div>
        </div>

        <div className="bg-[#3B82F6] rounded-lg text-white p-8 my-8 text-center not-prose">
          <p className="text-2xl font-bold mb-2">النتيجة؟</p>
          <p className="text-xl text-white/80">
            يصبح لديه سبب للعودة بدل البحث عن منافس.
          </p>
        </div>

        <h2 id="impact">كيف ينعكس ذلك على متجرك؟</h2>

        <div className="space-y-6 my-8 not-prose">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-[#3B82F6] rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="size-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">1️⃣ زيادة ��كرار الشراء</h3>
                <p className="text-black">
                  عندما يعرف العميل أن كل طلب يقربه من مكافأة،
                  يصبح لديه دافع نفسي للشراء مرة أخرى.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-[#3B82F6] rounded-lg flex items-center justify-center shrink-0">
                <DollarSign className="size-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">2️⃣ رفع متوسط قيمة الطلب</h3>
                <p className="text-black">
                  عند اقتراب العميل من هدف معين (مثلاً عدد نقاط محدد)،
                  قد يزيد قيمة طلبه ليصل إلى المكافأة أسرع.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-[#3B82F6] rounded-lg flex items-center justify-center shrink-0">
                <Award className="size-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">3️⃣ بناء طبقة عملاء VIP</h3>
                <p className="text-black">
                  من خلال المستويات، يمكنك مكافأة العملاء الأكثر شراءً،
                  وهؤلاء غالبًا يمثلون نسبة كبيرة من أرباحك.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="size-12 bg-[#3B82F6] rounded-lg flex items-center justify-center shrink-0">
                <Zap className="size-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-black mb-2">4️⃣ إطلاق منتجات بذكاء</h3>
                <p className="text-black mb-3">
                  بدل إطلاق منتج جديد وانتظار النتائج، يمكنك:
                </p>
                <ul className="space-y-2 text-black text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span>إطلاق تحدي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span>تقديم نقاط إضافية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span>منح مزايا حصرية للمستويات العليا</span>
                  </li>
                </ul>
                <p className="text-black mt-3 font-semibold">
                  وبذلك توجه السلوك الشرائي نحو هدف واضح.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 id="example">مثال عملي بسيط</h2>
        <p>تخيل أن:</p>

        <div className="bg-white rounded-lg p-8 my-6">
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-[#F7F7F7] rounded-lg">
              <span className="text-black">كل ريال =</span>
              <span className="font-bold text-[#3B82F6]">نقطة</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F7F7F7] rounded-lg">
              <span className="text-black">1000 نقطة =</span>
              <span className="font-bold text-[#3B82F6]">خصم 50 ريال</span>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-lg p-6 space-y-3">
            <p className="text-black">
              العميل يعرف أن كل طلب يقربه من مكافأة.
            </p>
            <p className="text-black">
              أنت لم تقدم خصمًا مجانيًا…
            </p>
            <p className="text-black font-bold text-lg">
              بل بنيت سببًا للعودة.
            </p>
          </div>
        </div>

        <h2 id="suitable">هل نظام الولاء مناسب لك؟</h2>
        <p>يكون مناسبًا إذا كان متجرك:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="flex items-start gap-3 p-5 bg-white rounded-lg">
            <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
            <span className="text-black">لديه منتجات قابلة لإعادة الشراء</span>
          </div>
          <div className="flex items-start gap-3 p-5 bg-white rounded-lg">
            <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
            <span className="text-black">يطلق منتجات جديدة بشكل دوري</span>
          </div>
          <div className="flex items-start gap-3 p-5 bg-white rounded-lg">
            <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
            <span className="text-black">يريد تقليل الاعتماد على الخصومات المباشرة</span>
          </div>
          <div className="flex items-start gap-3 p-5 bg-white rounded-lg">
            <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
            <span className="text-black">يرغب ببناء علاقة طويلة المدى مع العملاء</span>
          </div>
        </div>

        <div className="bg-black rounded-lg text-white p-8 my-8 not-prose">
          <h3 className="text-2xl font-bold mb-4">الخلاصة</h3>
          <p className="text-[#939393] text-lg mb-3">
            برنامج الولاء ليس أداة خصم.
          </p>
          <p className="text-white text-xl font-semibold mb-6">
            هو أداة استراتيجية لبناء تكرار الشراء.
          </p>
          <div className="bg-white rounded-lg p-5">
            <p className="text-black">
              BOND IT يمنحك الأدوات لتنفيذ ذلك بطريقة منظمة، قابلة للقياس، وقابلة للتحكم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}