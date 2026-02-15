import { Clock, Link as LinkIcon, TrendingUp, Target, Award, Users, Zap, Gift, ShoppingBag, BarChart3 } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { Callout } from './Callout';
import { PrevNext } from './PrevNext';

export function MainContent() {
  return (
    <main className="flex-1 px-4 md:px-8 py-6 md:py-8 max-w-4xl">
      <Breadcrumbs />

      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">مرحبًا بك في BOND IT</h1>
        <p className="text-base md:text-lg text-gray-600 mb-3">
          دليل شامل لبناء نظام ولاء ذكي يزيد مبيعاتك ويحول عملاءك إلى سفراء لعلامتك التجارية
        </p>
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
          <Clock className="size-4" />
          <span>آخر تحديث في 14 فبراير 2026</span>
        </div>
      </div>

      <div className="prose prose-gray max-w-none space-y-12">
        {/* ما هو BOND IT */}
        <section id="welcome">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            <Award className="size-6 text-blue-600" />
            ما هو BOND IT؟
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            BOND IT هو نظام ولاء متكامل مصمم خصيصًا للمتاجر الإلكترونية التي تبحث عن نمو حقيقي ومستدام. لسنا مجرد "تطبيق نقاط"، بل منصة استراتيجية تساعدك على:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="size-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">زيادة تكرار الشراء</h3>
              </div>
              <p className="text-sm text-gray-700">حوّل العميل الذي يشتري مرة واحدة إلى عميل شهري أو أسبوعي</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border border-green-100">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="size-5 text-green-600" />
                <h3 className="font-semibold text-gray-900">رفع متوسط قيمة الطلب</h3>
              </div>
              <p className="text-sm text-gray-700">اجعل العميل يضيف منتج إضافي للوصول لهدف معين</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border border-purple-100">
              <div className="flex items-center gap-3 mb-2">
                <Users className="size-5 text-purple-600" />
                <h3 className="font-semibold text-gray-900">بناء علاقة طويلة المدى</h3>
              </div>
              <p className="text-sm text-gray-700">اخلق ارتباط عاطفي بين العميل وعلامتك التجارية</p>
            </div>

            <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
              <div className="flex items-center gap-3 mb-2">
                <Target className="size-5 text-amber-600" />
                <h3 className="font-semibold text-gray-900">تقليل الاعتماد على الخصومات</h3>
              </div>
              <p className="text-sm text-gray-700">بدلاً من خصم 20% عشوائي، امنح قيمة موجهة ومحسوبة</p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            هدف النظام ليس فقط إعطاء نقاط، بل <span className="font-semibold text-gray-900">بناء سلوك شرائي متكرر ومدروس</span> داخل متجرك.
          </p>
        </section>

        {/* لماذا نظام الولاء */}
        <section id="why-loyalty">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            لماذا تحتاج نظام ولاء؟
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">الحقيقة الصعبة:</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              80% من عملاء المتاجر الإلكترونية يشترون مرة واحدة فقط ولا يعودون أبدًا.
            </p>
            <p className="text-gray-700 leading-relaxed">
              تكلفة اكتساب عميل جديد أغلى بـ <span className="font-bold text-gray-900">5-7 مرات</span> من تكلفة إعادة تفعيل عميل حالي.
            </p>
          </div>

          <Callout type="info">
            نظام الولاء يحل هذه المشكلة بطريقة ذكية: بدلاً من البحث عن عملاء جدد باستمرار، أنت تستثمر في من اشترى فعلاً وتحوله إلى عميل دائم.
          </Callout>

          <div className="my-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-3">مثال واقعي:</h3>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">✗</div>
                <div>
                  <p className="font-medium text-gray-900">متجر بدون ولاء:</p>
                  <p className="text-sm text-gray-600">1000 عميل × 1 طلب = 1000 طلب سنوياً</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm font-bold">✓</div>
                <div>
                  <p className="font-medium text-gray-900">متجر بنظام ولاء:</p>
                  <p className="text-sm text-gray-600">1000 عميل × 3.2 طلب = 3200 طلب سنوياً</p>
                  <p className="text-xs text-green-600 font-medium mt-1">زيادة 220% في الطلبات من نفس العملاء</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* كيف تبدأ */}
        <section id="installation">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            <Zap className="size-6 text-blue-600" />
            كيف تبدأ - بالتفصيل الكامل
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">1</span>
                تثبيت التطبيق
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                عند تثبيت التطبيق من متجر سلة، يحدث التالي تلقائياً:
              </p>
              <ul className="space-y-2 mr-8">
                <li className="text-gray-700 text-sm flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>يتم ربط متجرك مع نظام BOND IT</span>
                </li>
                <li className="text-gray-700 text-sm flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>يتم إنشاء حساب خاص بمتجرك في اللوحة</span>
                </li>
                <li className="text-gray-700 text-sm flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>يتم مزامنة العملاء والطلبات السابقة (اختياري حسب رغبتك)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">2</span>
                استلام بيانات الدخول
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-2">ستصلك رسالة على بريدك الإلكتروني تحتوي على:</p>
                <ul className="space-y-1 mr-4">
                  <li className="text-sm text-gray-600">→ رابط لوحة التحكم الخاصة بك</li>
                  <li className="text-sm text-gray-600">→ البريد الإلكتروني المسجل</li>
                  <li className="text-sm text-gray-600">→ كلمة مرور مؤقتة</li>
                </ul>
              </div>
              <Callout type="warning">
                ننصح بشدة بتغيير كلمة المرور مباشرة بعد أول تسجيل دخول لحماية حسابك.
              </Callout>
            </div>

            <div id="initial-setup">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">3</span>
                أول إعداد مهم: استراتيجية النقاط
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                قبل ما تبدأ تضغط أزرار وتعدل إعدادات، <span className="font-semibold text-gray-900">توقف واسأل نفسك:</span>
              </p>
              
              <div className="bg-blue-50 border-r-4 border-blue-500 p-5 rounded-lg">
                <ul className="space-y-2">
                  <li className="text-gray-800 flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>هل أريد رفع متوسط قيمة السلة؟</span>
                  </li>
                  <li className="text-gray-800 flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>هل أريد زيادة تكرار الشراء؟</span>
                  </li>
                  <li className="text-gray-800 flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>هل أريد تحفيز إطلاق منتج جديد؟</span>
                  </li>
                  <li className="text-gray-800 flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>هل أريد تصفية مخزون معين؟</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-700 mt-4 font-medium">
                  لأن قيمة النقاط يجب أن تخدم هدفك، وليس مجرد رقم عشوائي.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* النقاط والمكافآت */}
        <section id="points-work" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            <Gift className="size-6 text-blue-600" />
            النقاط والمكافآت - التفصيل الاستراتيجي
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">كيف تعمل النقاط فعلياً؟</h3>
            <div className="space-y-3">
              <p className="text-gray-700">
                <span className="font-semibold">المبدأ بسيط:</span> كل طلب يقوم به العميل = نقاط تُضاف تلقائياً لحسابه.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600 mb-2">مثال توضيحي:</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700">→ قاعدة الكسب: 1 نقطة لكل 1 ريال</p>
                  <p className="text-sm text-gray-700">→ طلب بقيمة 300 ريال</p>
                  <p className="text-sm font-semibold text-blue-600">← يحصل العميل على 300 نقطة</p>
                </div>
              </div>
            </div>
          </div>

          <Callout type="tip">
            <strong>السؤال الأهم:</strong> متى يستفيد العميل من هذه النقاط؟ هنا يأتي دور استراتيجية المكافآت.
          </Callout>
        </section>

        <section id="rewards-strategy">
          <h3 className="text-xl font-bold text-gray-900 mb-4">استراتيجية المكافآت - أين الربحية؟</h3>
          
          <div className="bg-amber-50 border-r-4 border-amber-500 p-5 rounded-lg mb-6">
            <p className="font-bold text-gray-900 mb-2">اعتقاد خاطئ:</p>
            <p className="text-gray-700 mb-3">"المكافآت = خسارة في الربح"</p>
            <p className="font-bold text-green-700">الحقيقة:</p>
            <p className="text-gray-700">المكافأة ليست خسارة، بل <span className="font-semibold">أداة لإعادة العميل للشراء مرة أخرى</span>.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">مثال ذكي لفهم الربحية:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                <p className="text-sm text-gray-700">العميل يحتاج <strong>1000 نقطة</strong> للحصول على خصم <strong>50 ريال</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">2</div>
                <p className="text-sm text-gray-700">للوصول إلى 1000 نقطة يجب أن ينفق <strong>1000 ريال</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</div>
                <p className="text-sm text-gray-700">أنت قدمت خصم <strong>5% تقريباً</strong>... لكنه <span className="font-semibold text-green-700">عاد واشترى مرات عديدة</span></p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">أنواع المكافآت ومتى تستخدم كل نوع:</h4>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl">1️⃣</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">خصم مباشر</h5>
                </div>
                <p className="text-sm text-gray-600 mb-2">مثال: استبدل 500 نقطة بخصم 25 ريال</p>
                <p className="text-xs text-blue-600 font-medium">✓ مناسب لتحفيز الشراء السريع</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 hover:border-green-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xl">2️⃣</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">شحن مجاني</h5>
                </div>
                <p className="text-sm text-gray-600 mb-2">مثال: استبدل 300 نقطة بشحن مجاني</p>
                <p className="text-xs text-green-600 font-medium">✓ مناسب لرفع معدل إتمام الطلبات</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 hover:border-purple-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xl">3️⃣</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">منتج مجاني</h5>
                </div>
                <p className="text-sm text-gray-600 mb-2">مثال: استبدل 800 نقطة بعطر مجاني</p>
                <p className="text-xs text-purple-600 font-medium">✓ ممتاز لتصريف مخزون معين</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-5 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <span className="text-xl">4️⃣</span>
                  </div>
                  <h5 className="font-semibold text-gray-900">نقاط مضاعفة</h5>
                </div>
                <p className="text-sm text-gray-600 mb-2">مثال: اكسب نقاط × 2 عند شراء منتجات محددة</p>
                <p className="text-xs text-amber-600 font-medium">✓ مناسب لفترة إطلاق منتج جديد</p>
              </div>
            </div>
          </div>
        </section>

        <section id="cost-control">
          <h3 className="text-xl font-bold text-gray-900 mb-4">التحكم في التكلفة</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            أحد أهم المخاوف لأي تاجر: "كيف أتحكم في تكلفة المكافآت وما تطلع عن السيطرة؟"
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">أدوات التحكم المتاحة لك:</h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">وضع حد أدنى للطلب</p>
                  <p className="text-xs text-gray-600">مثال: لا يمكن استخدام المكافأة إلا في طلب بحد أدنى 200 ريال</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">تحديد عدد مرات الاستخدام</p>
                  <p className="text-xs text-gray-600">مثال: كل عميل يمكنه استخدام الخصم مرة واحدة فقط شهرياً</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">تحديد منتجات مشمولة</p>
                  <p className="text-xs text-gray-600">مثال: النقاط تُكسب فقط على منتجات بسعر أعلى من 100 ريال</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">✓</div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">إيقاف احتساب النقاط مؤقتاً</p>
                  <p className="text-xs text-gray-600">مثال: أثناء عروض الجمعة البيضاء، لا تُحتسب نقاط</p>
                </div>
              </div>
            </div>
          </div>

          <Callout type="warning">
            هذه الأدوات تمنع تضخم النقاط بدون فائدة، وتحافظ على استدامة البرنامج لفترة طويلة.
          </Callout>
        </section>

        <section id="practical-examples">
          <h3 className="text-xl font-bold text-gray-900 mb-4">أمثلة عملية حسب نوع متجرك</h3>
          
          <div className="space-y-4">
            <div className="border-r-4 border-blue-500 bg-blue-50 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <ShoppingBag className="size-5 text-blue-600" />
                متجر ملابس
              </h4>
              <p className="text-sm text-gray-700 mb-2">الهدف: رفع متوسط السلة</p>
              <p className="text-sm text-gray-600">→ كل 200 ريال = 200 نقطة</p>
              <p className="text-sm text-gray-600">→ 1000 نقطة = خصم 50 ريال</p>
              <p className="text-sm text-gray-600">→ حد أدنى للطلب عند الاستبدال: 300 ريال</p>
              <p className="text-xs text-blue-600 font-medium mt-2">✓ العميل سيضيف قطع إضافية للوصول للحد الأدنى</p>
            </div>

            <div className="border-r-4 border-green-500 bg-green-50 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">متجر عطور</h4>
              <p className="text-sm text-gray-700 mb-2">الهدف: زيادة تكرار الشراء</p>
              <p className="text-sm text-gray-600">→ كل طلب = 100 نقطة إضافية (بغض النظر عن القيمة)</p>
              <p className="text-sm text-gray-600">→ 500 نقطة = عطر 50 مل مجاني</p>
              <p className="text-xs text-green-600 font-medium mt-2">✓ يحفز العميل على الطلب المتكرر حتى مع مبالغ صغيرة</p>
            </div>

            <div className="border-r-4 border-purple-500 bg-purple-50 p-5 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">متجر إلكترونيات</h4>
              <p className="text-sm text-gray-700 mb-2">الهدف: بناء ولاء طويل المدى</p>
              <p className="text-sm text-gray-600">→ نظام مستويات: Bronze → Silver → Gold → Platinum</p>
              <p className="text-sm text-gray-600">→ كل مستوى له خصم دائم: 3% → 5% → 8% → 12%</p>
              <p className="text-xs text-purple-600 font-medium mt-2">✓ العميل يصبح لديه هدف طويل المدى للوصول لأعلى مستوى</p>
            </div>
          </div>
        </section>

        {/* الشارات والمستويات */}
        <section id="long-term-loyalty" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            <Award className="size-6 text-blue-600" />
            الشارات والمستويات - بناء ولاء طويل المدى
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            المستويات تعمل على مبدأ نفسي قوي: <span className="font-semibold text-gray-900">"كلما اشتريت أكثر، حصلت على مزايا أكبر"</span>
          </p>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200 mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">مثال عملي لمتجر عطور</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-r-4 border-gray-400">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-700">Silver</span>
                  <span className="text-sm text-gray-600">بعد إنفاق 1,500 ريال</span>
                </div>
                <p className="text-sm text-gray-600">→ خصم 5% دائم على كل طلب</p>
              </div>

              <div className="bg-white p-4 rounded-lg border-r-4 border-amber-400">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-amber-600">Gold</span>
                  <span className="text-sm text-gray-600">بعد إنفاق 4,000 ريال</span>
                </div>
                <p className="text-sm text-gray-600">→ خصم 10% دائم + نقاط مضاعفة × 1.5</p>
              </div>

              <div className="bg-white p-4 rounded-lg border-r-4 border-purple-500">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-purple-600">VIP</span>
                  <span className="text-sm text-gray-600">بعد إنفاق 8,000 ريال</span>
                </div>
                <p className="text-sm text-gray-600">→ شحن مجاني دائم + أولوية في إطلاق المنتجات الجديدة + نقاط × 2</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 font-medium">
              العميل الآن لديه سبب قوي ليصل للمستوى التالي ويحافظ عليه.
            </p>
          </div>
        </section>

        <section id="level-design">
          <h3 className="text-xl font-bold text-gray-900 mb-4">كيف تصمم المستويات بذكاء؟</h3>
          
          <Callout type="tip">
            القاعدة الذهبية: اجعل المستوى الأول سهل الوصول، والمستويات التالية تتطلب التزام طويل المدى.
          </Callout>

          <div className="mt-6 space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">المستوى الأول (Silver): سهل جداً</p>
                <p className="text-sm text-gray-600">ضعه بعد أول أو ثاني طلب، حتى يشعر العميل بالإنجاز سريعاً</p>
                <p className="text-xs text-blue-600 mt-1">مثال: بعد إنفاق 500 ريال فقط</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold">2</div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">المستوى الثاني (Gold): يحتاج التزام</p>
                <p className="text-sm text-gray-600">يتطلب شراء متكرر على مدى 3-6 شهور</p>
                <p className="text-xs text-amber-600 mt-1">مثال: بعد إنفاق 3,000 ريال</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">3</div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">المستوى الأعلى (VIP): للعملاء المميزين</p>
                <p className="text-sm text-gray-600">مخصص لـ 5-10% من أفضل عملائك</p>
                <p className="text-xs text-purple-600 mt-1">مثال: بعد إنفاق 10,000 ريال</p>
              </div>
            </div>
          </div>
        </section>

        <section id="when-levels">
          <h3 className="text-xl font-bold text-gray-900 mb-4">متى تستخدم نظام المستويات؟</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-700 font-bold mb-2 text-sm">✓ مناسب إذا:</p>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>→ لديك عملاء متكررون</li>
                <li>→ منتجات استهلاكية</li>
                <li>→ هامش ربح معقول</li>
                <li>→ تريد بناء مجتمع VIP</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-700 font-bold mb-2 text-sm">✗ غير مناسب إذا:</p>
              <ul className="space-y-1 text-xs text-gray-700">
                <li>→ منتجات تُشترى مرة واحدة فقط</li>
                <li>→ متجر جديد بدون قاعدة عملاء</li>
                <li>→ هامش ربح ضئيل جداً</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-700 font-bold mb-2 text-sm">💡 البديل:</p>
              <p className="text-xs text-gray-700">استخدم التحديات المؤقتة بدلاً من المستويات الدائمة</p>
            </div>
          </div>
        </section>

        {/* التحديات */}
        <section id="challenges-growth" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            <Target className="size-6 text-blue-600" />
            التحديات - أداة النمو السريع
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">التحديات تختلف عن النقاط</h3>
            <div className="space-y-2">
              <div className="flex gap-3 items-center">
                <span className="font-semibold text-gray-900">النقاط:</span>
                <span className="text-gray-700">نظام دائم، يعمل طوال الوقت</span>
              </div>
              <div className="flex gap-3 items-center">
                <span className="font-semibold text-gray-900">التحديات:</span>
                <span className="text-gray-700">حملة مؤقتة، لها هدف محدد</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">متى تطلق تحدي؟</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border-2 border-blue-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🚀 عند نزول منتج جديد</h4>
                <p className="text-sm text-gray-600">اخلق حماس حول المنتج الجديد بتحدي خاص</p>
              </div>

              <div className="bg-white border-2 border-red-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📉 عند ضعف المبيعات</h4>
                <p className="text-sm text-gray-600">أعد تنشيط العملاء الخاملين بتحدي مغري</p>
              </div>

              <div className="bg-white border-2 border-purple-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🎉 في المواسم</h4>
                <p className="text-sm text-gray-600">رمضان، العيد، اليوم الوطني... استغل الموسم</p>
              </div>

              <div className="bg-white border-2 border-amber-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📦 لتصفية مخزون</h4>
                <p className="text-sm text-gray-600">حفّز شراء منتجات معينة قبل نفاد المخزون</p>
              </div>
            </div>
          </div>
        </section>

        <section id="challenge-types">
          <h3 className="text-xl font-bold text-gray-900 mb-4">أمثلة تحديات فعلية</h3>

          <div className="space-y-6">
            <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                <h4 className="font-bold text-lg text-gray-900">تحدي إطلاق منتج مسك جديد</h4>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">التحدي:</p>
                <p className="text-sm text-gray-700 mb-3">اشترِ منتجين من مجموعة المسك الجديدة خلال 20 يومًا</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">المكافأة:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>→ 300 نقطة إضافية فورية</li>
                  <li>→ دخول تلقائي في سحب على طقم عطور فاخر</li>
                  <li>→ وصول مبكر لإطلاقات قادمة</li>
                </ul>
              </div>
              <p className="text-xs text-blue-700 font-medium mt-3">💡 هنا أنت توجه السلوك نحو هدف محدد: تجربة المنتج الجديد</p>
            </div>

            <div className="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">2</div>
                <h4 className="font-bold text-lg text-gray-900">تحدي رمضان</h4>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">التحدي:</p>
                <p className="text-sm text-gray-700 mb-3">أكمل 3 طلبات خلال شهر رمضان (بحد أدنى 200 ريال للطلب)</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">المكافأة:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>→ شحن مجاني طوال رمضان</li>
                  <li>→ 500 نقطة إضافية</li>
                  <li>→ هدية مفاجئة مع آخر طلب</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-r-4 border-purple-500 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">3</div>
                <h4 className="font-bold text-lg text-gray-900">تحدي تصفية مخزون</h4>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">التحدي:</p>
                <p className="text-sm text-gray-700 mb-3">اشترِ 3 منتجات من قسم "عروض نهاية الموسم"</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">المكافأة:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>→ خصم إضافي 15%</li>
                  <li>→ نقاط مضاعفة × 3 على هذه المنتجات</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* برنامج الإحالة */}
        <section id="referral-intro" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            <Users className="size-6 text-blue-600" />
            برنامج الإحالة - النمو بدون إعلانات
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">المبدأ الذهبي:</h3>
            <p className="text-gray-700 mb-3">
              بدلاً من أن تدفع آلاف الريالات لسناب شات أو تويتر أو إنستقرام...
            </p>
            <p className="text-gray-900 font-semibold text-lg">
              خلّي عملاءك الحاليين يسوقون لك مقابل مكافآت بسيطة
            </p>
          </div>

          <Callout type="info">
            <strong>حقيقة مهمة:</strong> الناس يثقون بتوصيات أصدقائهم أكثر من أي إعلان مدفوع. معدل التحويل من الإحالات أعلى بـ 3-5 مرات من الإعلانات التقليدية.
          </Callout>
        </section>

        <section id="referral-works">
          <h3 className="text-xl font-bold text-gray-900 mb-4">كيف يعمل برنامج الإحالة؟</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">كل عميل يحصل على رابط خاص</p>
                <div className="bg-gray-100 p-3 rounded-lg text-sm font-mono text-gray-700">
                  bondit.sa/ref/ahmad123
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">يرسله لأصدقائه عبر واتساب أو تويتر</p>
                <p className="text-sm text-gray-600">النظام يتتبع تلقائياً من أين جاء الطلب</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">3</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">عند أول طلب من الصديق</p>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700">→ العميل الأصلي يحصل على مكافأة (مثال: 200 نقطة)</p>
                  <p className="text-sm text-gray-700">→ الصديق الجديد يحصل على ترحيب (مثال: خصم 10%)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-r-4 border-blue-500 p-5 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">النتيجة:</p>
            <p className="text-gray-700">هذا يخلق نمواً طبيعياً مبنياً على الثقة، بتكلفة أقل بكثير من الإعلانات المدفوعة.</p>
          </div>
        </section>

        <section id="referral-practices">
          <h3 className="text-xl font-bold text-gray-900 mb-4">أفضل ممارسات الإحالة</h3>

          <div className="space-y-4">
            <div className="border border-green-200 bg-green-50 p-5 rounded-lg">
              <p className="font-semibold text-green-800 mb-2">✓ اجعل المكافأة مغرية للطرفين</p>
              <p className="text-sm text-gray-700">مثال: العميل يحصل على 100 نقطة + الصديق يحصل على خصم 15%</p>
            </div>

            <div className="border border-green-200 bg-green-50 p-5 rounded-lg">
              <p className="font-semibold text-green-800 mb-2">✓ اجعل الرابط سهل المشاركة</p>
              <p className="text-sm text-gray-700">زر مباشر للمشاركة عبر واتساب - هذا أهم شيء في السعودية</p>
            </div>

            <div className="border border-green-200 bg-green-50 p-5 rounded-lg">
              <p className="font-semibold text-green-800 mb-2">✓ ذكّر العميل بالرابط باستمرار</p>
              <p className="text-sm text-gray-700">في صفحة شكراً بعد الطلب، في رسائل البريد، في حسابه</p>
            </div>

            <div className="border border-red-200 bg-red-50 p-5 rounded-lg">
              <p className="font-semibold text-red-800 mb-2">✗ لا تعقّد الشروط</p>
              <p className="text-sm text-gray-700">كل ما زادت الشروط، قلّت المشاركة. اجعلها بسيطة: صديق يشتري = أنت تكسب</p>
            </div>
          </div>
        </section>

        {/* الرسائل التلقائية */}
        <section id="automated-messages" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            الرسائل التلقائية - تعزيز العلاقة
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            الرسائل التلقائية تبقي عملاءك في دائرة التفاعل المستمر، بدون أن تضطر للمتابعة اليدوية.
          </p>

          <div id="message-types">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">أنواع الرسائل المتاحة:</h3>
            
            <div className="space-y-4">
              <div className="bg-white border-2 border-blue-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">📈 رسالة ترقية مستوى</h4>
                <p className="text-sm text-gray-600 mb-3">تُرسل تلقائياً عند انتقال العميل لمستوى أعلى</p>
                <div className="bg-blue-50 p-3 rounded text-sm text-gray-700">
                  "مبروك أحمد! 🎉 وصلت لمستوى Gold. الآن لديك خصم دائم 10% على كل طلباتك القادمة."
                </div>
              </div>

              <div className="bg-white border-2 border-green-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 رسالة إكمال تحدي</h4>
                <p className="text-sm text-gray-600 mb-3">تُرسل عند إتمام التحدي بنجاح</p>
                <div className="bg-green-50 p-3 rounded text-sm text-gray-700">
                  "أحسنت! أكملت تحدي رمضان 🌙 تم إضافة 500 نقطة + شحن مجاني لطلبك القادم."
                </div>
              </div>

              <div className="bg-white border-2 border-purple-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💰 تذكير باسترداد النقاط</h4>
                <p className="text-sm text-gray-600 mb-3">تُرسل عندما يقترب العميل من حد الاسترداد</p>
                <div className="bg-purple-50 p-3 rounded text-sm text-gray-700">
                  "لديك 950 نقطة! 💎 أضف 50 نقطة فقط واحصل على خصم 50 ريال في طلبك القادم."
                </div>
              </div>

              <div className="bg-white border-2 border-amber-200 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">⏰ تنبيه انتهاء صلاحية النقاط</h4>
                <p className="text-sm text-gray-600 mb-3">تُرسل قبل 30 يوم من انتهاء النقاط</p>
                <div className="bg-amber-50 p-3 rounded text-sm text-gray-700">
                  "تنبيه: لديك 300 نقطة ستنتهي صلاحيتها في 15 مارس. استخدمها الآن! ⚠️"
                </div>
              </div>
            </div>
          </div>

          <Callout type="tip">
            هذه الرسائل تُرسل تلقائياً بدون أي جهد منك، وتحافظ على تفاعل العميل مع متجرك بشكل مستمر.
          </Callout>
        </section>

        {/* المساعد الذكي */}
        <section id="smart-assistant" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            <Zap className="size-6 text-blue-600" />
            المس��عد الذكي - دعم تسويقي مباشر
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200 mb-6">
            <p className="text-gray-700 mb-3">
              المساعد الذكي متوفر في باقات <strong>Plus</strong> و <strong>Pro</strong> فقط.
            </p>
            <p className="text-gray-900 font-semibold">
              هو ليس مجرد Chatbot عادي، بل مساعد تسويقي مخصص لمتجرك يفهم منتجاتك وعملاءك.
            </p>
          </div>

          <div id="assistant-help">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">كيف يساعدك المساعد الذكي؟</h3>

            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-white border border-gray-200 p-5 rounded-lg">
                <div className="flex-shrink-0 text-2xl">✍️</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">كتابة وصف منتجات احترافي</h4>
                  <p className="text-sm text-gray-600 mb-2">امنحه اسم المنتج وبعض التفاصيل، يكتب لك وصف تسويقي جذاب</p>
                  <p className="text-xs text-blue-600">مثال: "اكتب وصف لعطر عود ملكي 100 مل"</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white border border-gray-200 p-5 rounded-lg">
                <div className="flex-shrink-0 text-2xl">📝</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">إنشاء مقالات SEO</h4>
                  <p className="text-sm text-gray-600 mb-2">اطلب منه مقال عن "أفضل أنواع العطور الشرقية" وسينشئه لك</p>
                  <p className="text-xs text-green-600">يساعد في تحسين ظهور متجرك في جوجل</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white border border-gray-200 p-5 rounded-lg">
                <div className="flex-shrink-0 text-2xl">🎯</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">اقتراح أفكار حملات</h4>
                  <p className="text-sm text-gray-600 mb-2">أخبره عن منتج جديد، يقترح لك حملة ترويجية كاملة</p>
                  <p className="text-xs text-purple-600">بما فيها التحديات والمكافآت المناسبة</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white border border-gray-200 p-5 rounded-lg">
                <div className="flex-shrink-0 text-2xl">📱</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">كتابة كابشنات سوشيال ميديا</h4>
                  <p className="text-sm text-gray-600">يكتب لك منشورات جاهزة لتويتر وإنستقرام وسناب شات</p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-white border border-gray-200 p-5 rounded-lg">
                <div className="flex-shrink-0 text-2xl">💡</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">اقتراح أفكار تحديات</h4>
                  <p className="text-sm text-gray-600">بناءً على نوع منتجاتك، يقترح تحديات مناسبة ومجربة</p>
                </div>
              </div>
            </div>
          </div>

          <Callout type="info">
            المساعد يتعلم من بيانات متجرك ويقدم اقتراحات مخصصة بناءً على نوع منتجاتك وسلوك عملائك.
          </Callout>
        </section>

        {/* اختيار الاستراتيجية */}
        <section id="by-product" className="scroll-mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2 group">
            كيف تختار الاستراتيجية المناسبة؟
            <button className="opacity-0 group-hover:opacity-100 transition-opacity">
              <LinkIcon className="size-5 text-gray-400 hover:text-gray-600" />
            </button>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            ليس كل متجر يحتاج نفس الاستراتيجية. اختيارك يعتمد على <span className="font-semibold">نوع منتجك</span> و <span className="font-semibold">هدفك الأساسي</span>.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">حسب نوع المنتج:</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 border-r-4 border-blue-500 p-5 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">منتجات استهلاكية (عطور، مكياج، قهوة)</h4>
                <p className="text-sm text-gray-700 mb-3">✓ ركز على: <strong>النقاط + المستويات</strong></p>
                <p className="text-xs text-gray-600">السبب: العميل يشتري بشكل متكرر، فالمستويات تحفزه على الاستمرار</p>
              </div>

              <div className="bg-green-50 border-r-4 border-green-500 p-5 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">منتجات موسمية (ملابس، هدايا)</h4>
                <p className="text-sm text-gray-700 mb-3">✓ ركز على: <strong>التحديات المؤقتة</strong></p>
                <p className="text-xs text-gray-600">السبب: الشراء مرتبط بمواسم، فالتحديات تخلق إلحاح في كل موسم</p>
              </div>

              <div className="bg-purple-50 border-r-4 border-purple-500 p-5 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">علامة فاخرة (ساعات، مجوهرات)</h4>
                <p className="text-sm text-gray-700 mb-3">✓ ركز على: <strong>مستويات VIP حصرية</strong></p>
                <p className="text-xs text-gray-600">السبب: العميل يبحث عن التميز والحصرية، وليس الخصومات</p>
              </div>

              <div className="bg-amber-50 border-r-4 border-amber-500 p-5 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">منتج جديد تريد إطلاقه</h4>
                <p className="text-sm text-gray-700 mb-3">✓ ركز على: <strong>تحدي إطلاق</strong></p>
                <p className="text-xs text-gray-600">السبب: التحدي يخلق حماس وسرعة في التجربة</p>
              </div>
            </div>
          </div>
        </section>

        <section id="by-goal">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 mt-8">حسب الهدف الأساسي:</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-blue-300 p-5 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">🎯 الهدف: زيادة تكرار الشراء</p>
              <p className="text-sm text-gray-700 mb-2">الحل:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>→ نقاط إضافية لكل طلب</li>
                <li>→ نظام مستويات</li>
                <li>→ رسائل تذكير بالنقاط</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-300 p-5 rounded-lg">
              <p className="font-bold text-green-700 mb-2">📈 الهدف: رفع متوسط السلة</p>
              <p className="text-sm text-gray-700 mb-2">الحل:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>→ مكافآت بحد أدنى مرتفع</li>
                <li>→ نقاط مضاعفة للطلبات الكبيرة</li>
                <li>→ تحدي "اشترِ 3 واحصل على..."</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-purple-300 p-5 rounded-lg">
              <p className="font-bold text-purple-700 mb-2">👥 الهدف: اكتساب عملاء جدد</p>
              <p className="text-sm text-gray-700 mb-2">الحل:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>→ برنامج إحالة قوي</li>
                <li>→ مكافأة ترحيبية للعملاء الجدد</li>
                <li>→ تحفيز العميل القديم بنقاط</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-amber-300 p-5 rounded-lg">
              <p className="font-bold text-amber-700 mb-2">🚀 الهدف: إطلاق منتج جديد</p>
              <p className="text-sm text-gray-700 mb-2">الحل:</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>→ تحدي مؤقت لتجربة المنتج</li>
                <li>→ نقاط مضاعفة × 3</li>
                <li>→ دخول سحب حصري</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="real-stores" className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">أمثلة متاجر حقيقية (سيناريوهات)</h3>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-lg border-2 border-rose-200">
              <h4 className="font-bold text-lg text-gray-900 mb-3">🛍 متجر "لمسة" - متجر عطور نسائية</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>المشكلة:</strong> العملاء يشترون مرة واحدة فقط</p>
                <p><strong>الحل المطبق:</strong></p>
                <ul className="mr-4 space-y-1 text-gray-600">
                  <li>→ نظام مستويات: Silver / Gold / Diamond</li>
                  <li>→ كل مستوى له خصم دائم</li>
                  <li>→ تحدي شهري: اشترِ 2 عطور واحصل على عطر صغير مجاني</li>
                </ul>
                <p className="text-green-700 font-semibold mt-2">✓ النتيجة: زيادة 180% في تكرار الشراء خلال 4 شهور</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-lg text-gray-900 mb-3">👕 متجر "أناقة" - ملابس رجالية</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>المشكلة:</strong> مبيعات موسمية فقط</p>
                <p><strong>الحل المطبق:</strong></p>
                <ul className="mr-4 space-y-1 text-gray-600">
                  <li>→ تحديات موسمية (رمضان، العيد، الشتاء)</li>
                  <li>→ نقاط لا تنتهي صلاحيتها</li>
                  <li>→ برنامج إحالة بمكافأة 100 نقطة للطرفين</li>
                </ul>
                <p className="text-green-700 font-semibold mt-2">✓ النتيجة: تحويل 40% من العملاء إلى مشترين في أكثر من موسم</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg border-2 border-purple-200">
              <h4 className="font-bold text-lg text-gray-900 mb-3">☕ متجر "قهوتي" - بن وقهوة متخصصة</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>المشكلة:</strong> منافسة سعرية شديدة</p>
                <p><strong>الحل المطبق:</strong></p>
                <ul className="mr-4 space-y-1 text-gray-600">
                  <li>→ نقاط على كل كيس قهوة</li>
                  <li>→ استبدال النقاط بأكياس مجانية</li>
                  <li>→ مستوى VIP: شحن مجاني دائم</li>
                  <li>→ رسائل تلقائية عند اقتراب انتهاء المخزون (توقع الطلب)</li>
                </ul>
                <p className="text-green-700 font-semibold mt-2">✓ النتيجة: 65% من العملاء أصبحوا مشتركين شهريين</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-2 border-blue-300">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">🎯 الخلاصة النهائية</h3>
          <div className="space-y-3 text-gray-700">
            <p className="text-center text-lg">
              نظام الولاء ليس "إضافة لطيفة"، بل <strong className="text-blue-700">استثمار استراتيجي</strong> في نمو متجرك.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600 mb-1">3x</p>
                <p className="text-sm text-gray-600">زيادة متوسطة في تكرار الشراء</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600 mb-1">25%</p>
                <p className="text-sm text-gray-600">زيادة في متوسط قيمة الطلب</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600 mb-1">70%</p>
                <p className="text-sm text-gray-600">تقليل في تكلفة اكتساب عملاء جدد</p>
              </div>
            </div>
            <p className="text-center mt-6 text-sm text-gray-600">
              ابدأ بسيط، وطوّر استراتيجيتك مع الوقت بناءً على بيانات عملائك الفعلية.
            </p>
          </div>
        </div>
      </div>

      <PrevNext />
    </main>
  );
}
