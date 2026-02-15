import { Gift, Settings, Award, FileText, CheckCircle2, AlertCircle, Calendar, Package, Play, Lightbulb } from 'lucide-react';

export default function PointsRewardsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          النقاط والمكافآت
        </h1>
        <p className="text-xl text-[#939393]">
          الأدوات الأساسية لإدارة برنامج الولاء داخل متجرك
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-[15px] p-6 my-8 not-prose">
          <p className="text-black text-lg mb-4">
            توفر صفحة النقاط والمكافآت في نظام BOND IT الأدوات الأساسية لإدارة برنامج الولاء داخل متجرك، من خلال ضبط طريقة احتساب النقاط، إنشاء المكافآت، تحديد شروط الاستبدال، ومتابعة سجل العمليات بالكامل.
          </p>
          <p className="text-black font-semibold">
            هذه الصفحة هي نقطة البداية لأي متجر يرغب ببناء ولاء واضح وسهل الفهم للعملاء.
          </p>
        </div>

        <h2 id="points-rules">أولًا: قواعد النقاط</h2>

        <p>
          هذا القسم مخصص للتحكم في طريقة احتساب النقاط التي يحصل عليها العميل عند الشراء.
        </p>

        <div className="bg-white rounded-[15px] p-6 my-6 not-prose">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <Settings className="size-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black">ماذا يمكنك ضبطه هنا؟</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">تفعيل نظام النقاط في المتجر.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">تحديد قيمة النقاط مقابل كل ريال يتم إنفاقه.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">جعل احتساب النقاط تلقائيًا بعد إتمام الطلب، دون تدخل يدوي.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[15px] p-6 my-8 not-prose">
          <h4 className="text-lg font-bold text-black mb-4">مثال عملي</h4>
          
          <div className="bg-[#F7F7F7] rounded-[15px] p-5 mb-4">
            <p className="text-black mb-3">إذا قمت بتحديد:</p>
            <p className="text-2xl font-bold text-[#3B82F6] text-center py-3">
              1 نقطة لكل 1 ريال
            </p>
          </div>

          <p className="text-black font-semibold mb-3">فسيحصل العميل على:</p>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="text-black">طلب بقيمة 100 ريال</span>
              <span className="text-[#3B82F6] font-bold">→ 100 نقطة</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="text-black">طلب بقيمة 250 ريال</span>
              <span className="text-[#3B82F6] font-bold">→ 250 نقطة</span>
            </div>
          </div>

          <p className="text-[#939393] text-sm mt-4 italic text-center">
            كل عملية تتم تلقائيًا.
          </p>
        </div>

        <h2 id="additional-settings">ثانيًا: إعدادات إضافية للنقاط</h2>

        <p>
          يوفر النظام إعدادات إضافية تساعدك على التحكم في سلوك النقاط بما يناسب استراتيجية متجرك.
        </p>

        <div className="my-8 not-prose">
          <h4 className="text-lg font-bold text-black mb-4">أبرز الإعدادات</h4>

          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden bg-white">
              <div className="bg-[#3B82F6] p-4">
                <h5 className="text-white font-bold">1️⃣ تفعيل النقاط الدائمة</h5>
              </div>
              <div className="p-5">
                <p className="text-black">
                  عند تفعيل هذا الخيار، لا تنتهي صلاحية النقاط ويمكن للعميل الاحتفاظ بها لفترة طويلة.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white">
              <div className="bg-[#3B82F6] p-4">
                <h5 className="text-white font-bold">2️⃣ تعطيل احتساب نقاط الشراء أثناء وجود تحديات نشطة</h5>
              </div>
              <div className="p-5">
                <p className="text-black mb-3">
                  هذا خيار ذكي يمنع تضاعف التحفيز عندما تكون هناك تحديات تمنح نقاطًا إضافية، ويضمن عدم تراكم نقاط زائدة قد تؤثر على ربحية المتجر.
                </p>
                <div className="bg-[#F7F7F7] rounded-[15px] p-3">
                  <p className="text-black text-sm font-semibold">
                    💡 هذا الخيار يحميك من تضخم النقاط خلال الحملات المكثفة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="rewards">ثالثًا: المكافآت</h2>

        <p>
          المكافآت هي ما يحصل عليه العميل عند استبدال نقاطه.
        </p>

        <div className="bg-white rounded-[15px] p-6 my-6 not-prose">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <Gift className="size-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black">في هذا القسم يمكنك:</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-black">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>إنشاء مكافآت جديدة.</span>
            </div>
            <div className="flex items-start gap-3 text-black">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>عرض قائمة المكافآت الحالية وحالة كل مكافأة (مفعلة أو متوقفة).</span>
            </div>
            <div className="flex items-start gap-3 text-black">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>تعديل مكافأة موجودة أو إيقافها مؤقتًا.</span>
            </div>
          </div>
        </div>

        <h3 id="create-reward">إضافة مكافأة جديدة</h3>

        <p>
          عند إنشاء مكافأة، تمر عملية الإعداد عادة بأقسام واضحة.
        </p>

        {/* Reward Setup Steps */}
        <div className="space-y-6 my-8 not-prose">
          {/* Step 1: General Details */}
          <div className="rounded-lg overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Award className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">1) التفاصيل العامة للمكافأة</h4>
              </div>
              <p className="text-white/80">في هذا القسم تحدد البيانات الأساسية التي تظهر للعميل:</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-black">اسم المكافأة (يظهر للعميل).</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div className="flex-1">
                  <p className="text-black mb-3">نوع المكافأة، مثل:</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-white rounded-[15px] text-sm text-black text-center">خصم</div>
                    <div className="p-2 bg-white rounded-[15px] text-sm text-black text-center">شحن مجاني</div>
                    <div className="p-2 bg-white rounded-[15px] text-sm text-black text-center">منتج مجاني</div>
                    <div className="p-2 bg-white rounded-[15px] text-sm text-black text-center">كاش باك</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-black">وصف مختصر يوضح قيمة المكافأة.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <p className="text-black">عدد النقاط المطلوبة للاستبدال.</p>
              </div>
              <div className="bg-[#F7F7F7] rounded-[15px] p-4 text-sm">
                <p className="font-semibold text-black">💡 ملاحظة مهمة:</p>
                <p className="text-black">يتم إصدار المكافأة على شكل كوبون للعميل بعد الاستبدال.</p>
              </div>
            </div>
          </div>

          {/* Step 2: Usage Conditions */}
          <div className="rounded-lg overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">2) شروط استخدام المكافأة</h4>
              </div>
              <p className="text-white/80">هذا القسم مهم لأنه يساعدك على التحكم في تكلفة المكافأة ومنع استخدامها بشكل يضر الربحية.</p>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-black font-semibold">يمكنك تحديد:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                  <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-black">حد أدنى لقيمة الطلب حتى يتم استخدام المكافأة.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                  <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-black">عدد مرات استخدام المكافأة لكل عميل.</p>
                </div>
              </div>

              <div className="bg-[#F7F7F7] rounded-[15px] p-5">
                <p className="text-black font-semibold mb-3">مثال:</p>
                <div className="space-y-2 text-black">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>لا يمكن استخدام المكافأة إلا إذا كانت قيمة الطلب 200 ريال أو أكثر.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>يمكن استخدامها مرة واحدة فقط لكل عميل.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Product Linking */}
          <div className="rounded-lg overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Package className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">3) المنتجات المرتبطة بالمكافأة</h4>
              </div>
              <p className="text-white/80">يمكنك تخصيص المكافأة بشكل أدق من خلال:</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                  <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-black">تحديد منتجات يسمح بتطبيق المكافأة عليها.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                  <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-black">أو استثناء منتجات معينة من تطبيق المكافأة.</p>
                </div>
              </div>

              <div className="bg-[#F7F7F7] rounded-[15px] p-4 text-sm">
                <p className="font-semibold mb-2 text-black">💡 متى يكون هذا مفيدًا؟</p>
                <p className="text-black">
                  عندما ترغب بتوجيه الاستبدال نحو منتجات محددة، أو حماية منتجات هامش ربحها منخفض.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Activation */}
          <div className="rounded-lg overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Calendar className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">4) تفعيل المكافأة</h4>
              </div>
              <p className="text-white/80">في هذه الخطوة يمكنك تحديد:</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                  <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-black">تاريخ بداية للمكافأة.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                  <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-black">تاريخ نهاية للمكافأة.</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
                  <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-black">أو تركها نشطة بدون تاريخ انتهاء.</p>
                </div>
              </div>

              <div className="bg-[#F7F7F7] rounded-[15px] p-4 text-sm">
                <p className="font-semibold mb-2 text-black">⚙️ مرونة إضافية:</p>
                <p className="text-black">
                  يمكنك إيقاف المكافأة مؤقتًا دون حذفها، ثم إعادة تفعيلها لاحقًا.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 id="points-log">رابعًا: سجل النقاط</h2>

        <p>
          سجل النقاط يعرض لك كل العمليات المرتبطة بالنقاط داخل المتجر، مثل:
        </p>

        <div className="bg-white rounded-[15px] p-6 my-6 not-prose">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <FileText className="size-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black">ماذا يعرض السجل؟</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">النقاط التي اكتسبها العميل.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">النقاط التي تم استبدالها.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">مصدر العملية وتاريخها.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[15px] p-6 my-6 not-prose">
          <p className="text-black font-semibold mb-3">هذا السجل يساعدك على:</p>
          <div className="space-y-2 text-black">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>متابعة أداء البرنامج بدقة</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>مراجعة أي عملية استبدال</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span>اكتشاف أي سلوك غير طبيعي مبكرًا</span>
            </div>
          </div>
        </div>

        <h2 id="tips">نصائح عملية للتاجر</h2>

        <div className="bg-white rounded-[15px] p-8 my-8 not-prose">
          <div className="flex items-start gap-4 mb-6">
            <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
            <h3 className="text-xl font-bold text-black">نصائح لإدارة فعّالة</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">ابدأ بقيمة نقاط بسيطة وواضحة للعملاء.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">اجعل المكافأة قابلة للتحقيق، لكن لا تكون سهلة جدًا حتى لا تفقد قيمتها.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">اربط شروط المكافآت بهدف تجاري مثل رفع متوسط السلة أو تصريف منتجات محددة.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <p className="text-black">استخدم خيار تعطيل النقاط أثناء التحديات عند تشغيل حملات مكثفة لتجنب تضخم النقاط.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <p className="text-black">راقب سجل النقاط بشكل دوري لتقييم نتائج البرنامج وتحسينه.</p>
            </div>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="bg-white rounded-[15px] overflow-hidden my-12 not-prose">
          <div className="aspect-video bg-[#F7F7F7] flex items-center justify-center relative">
            <div className="text-center">
              <div className="size-20 bg-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="size-10 text-white mr-[-4px]" />
              </div>
              <p className="text-black font-semibold text-lg">شرح فيديو: إعداد النقاط والمكافآت</p>
              <p className="text-[#939393] text-sm mt-2">سيتم إضافة الفيديو قريبًا</p>
            </div>
          </div>
          <div className="p-5 bg-white">
            <p className="text-[#939393] text-sm text-center">
              📹 شاهد شرح عملي خطوة بخطوة لإعداد برنامج النقاط والمكافآت في متجرك
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}