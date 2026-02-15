import { Lightbulb, TrendingUp, Users, Zap, Gift, Target, UserPlus } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          ما هو BOND IT؟
        </h1>
        <p className="text-xl text-[#939393]">
          نظام ولاء متكامل للمتاجر الإلكترونية
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg">
          BOND IT هو نظام ولاء متكامل للمتاجر الإلكترونية، مصمم لمساعدتك على زيادة تكرار الشراء
          وبناء علاقة طويلة المدى مع عملائك.
        </p>

        <div className="bg-white rounded-none p-6 my-6">
          <p className="text-black font-semibold mb-2">💡 الفكرة الأساسية:</p>
          <p className="text-black">
            لا يعتمد النظام على الخصومات العشوائية، بل يمنحك أدوات منظمة لتحفيز العملاء
            بطريقة مدروسة تخدم أهداف متجرك.
          </p>
        </div>

        <h2 id="what-offers">ماذا يقدم لك BOND IT؟</h2>
        <p>من خلال النظام يمكنك:</p>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="p-6 bg-white rounded-none">
            <div className="size-12 bg-[#3B82F6] rounded-none flex items-center justify-center mb-4">
              <Gift className="size-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              برنامج نقاط ومكافآت
            </h3>
            <p className="text-black text-sm">
              إنشاء برنامج نقاط ومكافآت واضح يشجع العملاء على العودة
            </p>
          </div>

          <div className="p-6 bg-white rounded-none">
            <div className="size-12 bg-[#3B82F6] rounded-none flex items-center justify-center mb-4">
              <TrendingUp className="size-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              مستويات الولاء
            </h3>
            <p className="text-black text-sm">
              بناء مستويات ولاء (فضي – ذهبي – VIP) لتحفيز العملاء
            </p>
          </div>

          <div className="p-6 bg-white rounded-none">
            <div className="size-12 bg-[#3B82F6] rounded-none flex items-center justify-center mb-4">
              <Target className="size-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              تحديات تحفيزية
            </h3>
            <p className="text-black text-sm">
              إطلاق تحديات تحفيزية قصيرة المدى لزيادة المبيعات
            </p>
          </div>

          <div className="p-6 bg-white rounded-none">
            <div className="size-12 bg-[#3B82F6] rounded-none flex items-center justify-center mb-4">
              <UserPlus className="size-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              برنامج إحالة
            </h3>
            <p className="text-black text-sm">
              تفعيل برنامج إحالة لجلب عملاء جدد عبر عملائك الحاليين
            </p>
          </div>

          <div className="p-6 bg-white rounded-none">
            <div className="size-12 bg-[#3B82F6] rounded-none flex items-center justify-center mb-4">
              <Zap className="size-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              رسائل تلقائية
            </h3>
            <p className="text-black text-sm">
              إرسال رسائل تلقائية بناءً على نشاط العميل
            </p>
          </div>

          <div className="p-6 bg-white rounded-none">
            <div className="size-12 bg-[#3B82F6] rounded-none flex items-center justify-center mb-4">
              <Lightbulb className="size-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">
              مساعد ذكي
            </h3>
            <p className="text-black text-sm">
              الاستفادة من مساعد ذكي (في باقات Plus و Pro) لدعم التسويق والمحتوى
            </p>
          </div>
        </div>

        <h2 id="why-need">لماذا تحتاج برنامج ولاء؟</h2>
        <p>
          الحصول على عميل جديد يكلفك أكثر من الاحتفاظ بعميل حالي.
        </p>

        <div className="bg-white rounded-none p-6 my-6">
          <p className="text-black font-semibold mb-2">⚠️ حقيقة مهمة:</p>
          <p className="text-black">
            تكلفة جذب عميل جديد أعلى بكثير من تكلفة الاحتفاظ بعميل حالي.
            برنامج الولاء يساعدك على بناء قاعدة عملاء مخلصة.
          </p>
        </div>

        <p className="font-semibold text-black">برنامج الولاء يساعدك على:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
          <div className="flex items-start gap-3 p-4 bg-white rounded-none">
            <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">✓</div>
            <span className="text-black">تشجيع العملاء على العودة مرة أخرى</span>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-none">
            <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">✓</div>
            <span className="text-black">رفع متوسط قيمة الطلب</span>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-none">
            <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">✓</div>
            <span className="text-black">مكافأة العملاء الأكثر شراءً</span>
          </div>
          <div className="flex items-start gap-3 p-4 bg-white rounded-none">
            <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">✓</div>
            <span className="text-black">خلق سبب دائم للرجوع إلى متجرك</span>
          </div>
        </div>

        <h2 id="how-works">كيف يعمل النظام؟</h2>
        <p>
          الفكرة بسيطة، لكن النتائج استراتيجية:
        </p>

        <div className="bg-white rounded-none p-6 my-6">
          <div className="space-y-3 text-black">
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">1</div>
              <p>يشتري العميل من متجرك</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">2</div>
              <p>يحصل على نقاط تلقائيًا</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">3</div>
              <p>يجمع النقاط ويستبدلها بمكافآت</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="size-6 bg-[#3B82F6] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">✓</div>
              <p className="font-semibold">يعود للشراء مرة أخرى للاستفادة منها</p>
            </div>
          </div>
        </div>

        <p className="font-semibold text-black">يمكنك أيضًا:</p>
        <ul className="space-y-2 my-4">
          <li>منحه مزايا عند الوصول لمستوى أعلى</li>
          <li>إطلاق تحدٍ لفترة محددة لرفع المبيعات</li>
          <li>مكافأته عند دعوة أصدقائه</li>
        </ul>

        <div className="bg-white rounded-none p-4 my-6">
          <p className="text-sm text-black font-semibold mb-2">⚡ مميز:</p>
          <p className="text-sm text-black">
            كل ذلك يتم بشكل تلقائي داخل النظام.
          </p>
        </div>

        <h2 id="example">مثال عملي</h2>
        <p>لنفترض أنك حددت:</p>

        <div className="bg-white rounded-none p-8 my-6">
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between p-4 bg-[#F7F7F7] rounded-none">
              <span className="text-black">معدل النقاط</span>
              <span className="font-bold text-[#3B82F6]">1 نقطة لكل 1 ريال</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F7F7F7] rounded-none">
              <span className="text-black">المكافأة</span>
              <span className="font-bold text-[#3B82F6]">1000 نقطة = خصم 50 ريال</span>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-none p-6">
            <p className="text-black font-semibold mb-3">📊 النتيجة:</p>
            <p className="text-black">
              عند إنفاق العميل <strong>1000 ريال</strong>، يحصل على خصم <strong>50 ريال</strong> يشجعه للعودة مرة أخرى.
            </p>
            <p className="text-black font-semibold mt-3">
              أنت لم تخسر، بل بنيت سلوك شراء متكرر.
            </p>
          </div>
        </div>

        <h2 id="no-tech">هل أحتاج خبرة تقنية؟</h2>
        <p className="text-2xl font-bold text-black">لا.</p>
        
        <p>
          تم تصميم BOND IT ليكون واضحًا وسهل الاستخدام.
          بعد تثبيت التطبيق، يتم ربطه تلقائيًا بمتجرك، ويمكنك إدارة كل شيء من لوحة تحكم بسيطة.
        </p>

        <div className="bg-[#3B82F6] rounded-none text-white p-8 my-8 not-prose">
          <h3 className="text-2xl font-bold mb-3">جاهز للبدء؟</h3>
          <p className="text-white/80 mb-6">
            ابدأ بتفعيل برنامج النقاط، ثم انتقل لبناء مستويات أو إطلاق أول تحدي.
          </p>
          <button className="px-6 py-3 bg-white rounded-none text-[#3B82F6] font-semibold hover:bg-[#F7F7F7] transition-colors">
            ابدأ الآن
          </button>
        </div>

        <div className="bg-black rounded-none text-white p-8 my-8 text-center not-prose bg-[#ededed]">
          <p className="text-2xl font-bold mb-2">BOND IT ليس مجرد نظام نقاط…</p>
          <p className="text-xl text-[#939393]">بل أداة لبناء ولاء حقيقي داخل متجرك.</p>
        </div>
      </div>
    </div>
  );
}