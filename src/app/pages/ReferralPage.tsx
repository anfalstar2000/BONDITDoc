import { Share2, Users, Gift, TrendingUp, CheckCircle2, Play, Lightbulb, Link2, Award, BarChart3, DollarSign } from 'lucide-react';

export default function ReferralPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          برنامج الإحالة
        </h1>
        <p className="text-xl text-gray-500">
          اجعل عملائك الحاليين سفراء لعلامتك التجارية
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
          <p className="text-black text-lg mb-4">
            يوفر برنامج الإحالة في BOND IT وسيلة لنمو متجرك عبر عملائك الحاليين، من خلال منحهم مكافأة عند دعوة أصدقائهم للشراء.
          </p>
          <p className="text-black font-semibold">
            بدل الاعتماد الكامل على الإعلانات المدفوعة، يمكنك تحفيز عملائك ليصبحوا سفراء لعلامتك التجارية.
          </p>
        </div>

        <h2 id="what-is-referral">ما هو برنامج الإحالة؟</h2>

        <p>
          برنامج ا��إحالة يسمح لكل عميل بالحصول على رابط دعوة خاص به.
        </p>

        <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
          <div className="flex items-center gap-3 mb-5">
            <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
              <Link2 className="size-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black">عند مشاركة الرابط:</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">يدخل شخص جديد عبر رابط الإحالة.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">يُتم أول طلب له في المتجر.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">يحصل العميل المُحيل على مكافأة محددة.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-none p-4 mt-4">
            <p className="font-semibold text-center text-black">
              💡 يمكنك أيضًا منح مكافأة للعميل الجديد لزيادة معدل التحويل.
            </p>
          </div>
        </div>

        <h2 id="overview">أولًا: نظرة عامة على الصفحة</h2>

        <p>
          في صفحة برنامج الإحالة يمكنك:
        </p>

        <div className="bg-white rounded-none border border-gray-100 p-6 my-6 not-prose">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">تفعيل أو إيقاف البرنامج.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">تحديد نوع المكافأة.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">ضبط شروط استحقاق المكافأة.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <p className="text-black">متابعة أداء البرنامج وعدد الإحالات الناجحة.</p>
            </div>
          </div>
        </div>

        {/* Referral Setup Steps */}
        <div className="space-y-6 my-8 not-prose">
          {/* Step 1: Reward Setup */}
          <div className="rounded-none overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
                  <Gift className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">1) إعداد مكافأة الإحالة</h4>
              </div>
              <p className="text-white/80">يمكنك تحديد المكافأة التي يحصل عليها العميل عند نجاح الإحالة.</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-gray-50 rounded-none p-5">
                <p className="text-black font-semibold mb-3">أنواع المكافآت الممكنة:</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
                    <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-black">نقاط إضافية.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
                    <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-black">خصم على شكل كوبون.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
                    <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-black">شحن مجاني.</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
                    <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-black">مكافأة مخصصة حسب استراتيجيتك.</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-none p-4">
                <p className="font-semibold text-black">⚡ تلقائي:</p>
                <p className="text-black text-sm">
                  المكافأة يتم إصدارها تلقائيًا عند تحقق الشروط.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Eligibility Conditions */}
          <div className="rounded-none overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
                  <CheckCircle2 className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">2) شروط استحقاق المكافأة</h4>
              </div>
              <p className="text-white/80">يمكنك تحديد متى تعتبر الإحالة "ناجحة"، مثل:</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-black">عند إتمام أول طلب للعميل الجديد.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-black">عند وصول الطلب إلى حالة مكتملة.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-black">بعد حد أدنى لقيمة الطلب.</p>
              </div>

              <div className="bg-gray-50 rounded-none p-4">
                <p className="font-semibold text-black">🛡️ حماية:</p>
                <p className="text-black text-sm">
                  هذا يمنع استغلال النظام دون تحقيق مبيعات فعلية.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: New Customer Reward */}
          <div className="rounded-none overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
                  <Users className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">3) مكافأة العميل الجديد (اختياري)</h4>
              </div>
              <p className="text-white/80">لزيادة احتمالية الشراء الأول، يمكنك:</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-none p-5 text-center">
                  <Award className="size-8 text-[#3B82F6] mx-auto mb-3" />
                  <p className="text-black font-semibold">منح خصم ترحيبي</p>
                </div>
                <div className="bg-gray-50 rounded-none p-5 text-center">
                  <Gift className="size-8 text-[#3B82F6] mx-auto mb-3" />
                  <p className="text-black font-semibold">نقاط بداية عند التسجيل</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-none p-4">
                <p className="font-semibold text-center text-black">
                  🎯 بهذا يصبح العرض جذابًا للطرفين.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Performance Tracking */}
          <div className="rounded-none overflow-hidden bg-white">
            <div className="bg-[#3B82F6] p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 bg-white/20 rounded-none flex items-center justify-center">
                  <BarChart3 className="size-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">4) متابعة الأداء</h4>
              </div>
              <p className="text-white/80">توفر الصفحة إحصائيات مهمة لتقييم نجاح البرنامج:</p>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-black">عدد الإحالات الناجحة.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-black">إجمالي المبيعات من الإحالات.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-black">قائمة أفضل المُحيلين.</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
                <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <p className="text-black">معدل التحويل من الروابط.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 id="why-referral">لماذا يعتبر برنامج الإحالة مهمًا؟</h2>

        <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
          <div className="flex items-center gap-3 mb-5">
            <TrendingUp className="size-8 text-[#3B82F6]" />
            <h3 className="text-xl font-bold text-black">الفوائد الأساسية</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <p className="text-black font-semibold">تكلفة اكتساب أقل</p>
                <p className="text-gray-500 text-sm">مقارنة بالإعلانات المدفوعة.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <p className="text-black font-semibold">ثقة أعلى</p>
                <p className="text-gray-500 text-sm">التوصية من صديق أقوى من الإعلان.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <p className="text-black font-semibold">نمو طبيعي ومستدام</p>
                <p className="text-gray-500 text-sm">كل عميل يجلب عملاء جدد.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <p className="text-black font-semibold">تعزيز الولاء</p>
                <p className="text-gray-500 text-sm">العميل يشعر بالانتماء عندما يوصي بمتجرك.</p>
              </div>
            </div>
          </div>
        </div>

        <h2 id="when-to-use">متى تستخدم برنامج الإحالة؟</h2>

        <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
          <p className="text-black font-semibold mb-4">برنامج الإحالة فعّال عندما:</p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span className="text-black">لديك منتج يحب العملاء التوصية به.</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span className="text-black">تريد نمو طبيعي دون ميزانية إعلانات كبيرة.</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span className="text-black">لديك قاعدة عملاء راضية وتفاعلية.</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <CheckCircle2 className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
              <span className="text-black">تستهدف جمهورًا يحب مشاركة التجارب.</span>
            </div>
          </div>
        </div>

        <h2 id="example">مثال عملي</h2>

        <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
          <h4 className="text-lg font-bold text-black mb-4 text-center">سيناريو كامل</h4>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-none p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">1</div>
                <p className="text-black font-semibold">عميل حالي يشارك رابطه</p>
              </div>
              <p className="text-gray-500 text-sm">أحمد (عميل حالي) يحصل على رابط إحالة خاص من لوحة الولاء.</p>
            </div>

            <div className="bg-gray-50 rounded-none p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">2</div>
                <p className="text-black font-semibold">صديقه يستخدم الرابط</p>
              </div>
              <p className="text-gray-500 text-sm">خالد (صديق أحمد) يدخل المتجر عبر رابط الإحالة.</p>
            </div>

            <div className="bg-gray-50 rounded-none p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">3</div>
                <p className="text-black font-semibold">يحصل على خصم ترحيبي</p>
              </div>
              <p className="text-gray-500 text-sm">خالد يحصل على 10% خصم على أول طلب.</p>
            </div>

            <div className="bg-gray-50 rounded-none p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-8 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">4</div>
                <p className="text-black font-semibold">إتمام الطلب</p>
              </div>
              <p className="text-gray-500 text-sm">خالد يُتم أول طلب له.</p>
            </div>

            <div className="bg-[#3B82F6] rounded-none p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-8 bg-white rounded-full flex items-center justify-center text-[#3B82F6] font-bold">5</div>
                <p className="text-white font-semibold">مكافأة للطرفين</p>
              </div>
              <p className="text-white/80 text-sm">أحمد يحصل على 200 نقطة، وخالد ينضم لبرنامج الولاء.</p>
            </div>
          </div>
        </div>

        <h2 id="cost-calculation">حساب تكلفة الاكتساب</h2>

        <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
          <div className="flex items-center gap-3 mb-5">
            <DollarSign className="size-8 text-[#3B82F6]" />
            <h3 className="text-xl font-bold text-black">مقارنة التكلفة</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-none p-5">
              <p className="text-black font-semibold mb-3">الإعلانات التقليدية</p>
              <div className="space-y-2 text-sm text-black">
                <p>• تكلفة النقرة: 2-5 ريال</p>
                <p>• معدل التحويل: 2-3%</p>
                <p>• تكلفة عميل جديد: 70-150 ريال</p>
              </div>
            </div>

            <div className="bg-[#3B82F6] rounded-none p-5 text-white">
              <p className="font-semibold mb-3">برنامج الإحالة</p>
              <div className="space-y-2 text-sm">
                <p>• مكافأة للمُحيل: 20-50 ريال</p>
                <p>• معدل التحويل: 10-25%</p>
                <p>• تكلفة عميل جديد: 20-50 ريال</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-none p-4 mt-4">
            <p className="text-black text-sm text-center font-semibold">
              💡 برنامج الإحالة يوفر 50-70% من تكلفة الاكتساب
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
              <p className="text-black">اجعل المكافأة جذابة لكن لا تبالغ حتى لا تخسر ربحيتك.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">سهّل عملية المشاركة: رابط واضح، نص جاهز للنسخ، أزرار للسوشيال ميديا.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">راقب أداء البرنامج بانتظام وحسّن المكافآت إذا كانت النتائج ضعيفة.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <p className="text-black">اربط البرنامج بحملات موسمية لزيادة الإحالات.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
              <p className="text-black">كافئ أفضل المُحيلين بمزايا إضافية لتشجيع الاستمرارية.</p>
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
              <p className="text-black font-semibold text-lg">شرح فيديو: إعداد برنامج الإحالة</p>
              <p className="text-gray-500 text-sm mt-2">سيتم إضافة الفيديو قريبًا</p>
            </div>
          </div>
          <div className="p-5 bg-white">
            <p className="text-gray-500 text-sm text-center">
              📹 شاهد شرح عملي خطوة بخطوة لإطلاق برنامج إحالة ناجح في متجرك
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}