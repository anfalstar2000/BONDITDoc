import { Link2, RefreshCw, Eye, EyeOff, ShoppingBag, Sparkles, Key, CheckCircle2, AlertTriangle, Play, Lightbulb, Zap, Shield, FileText } from 'lucide-react';

export default function IntegrationsPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          التكاملات
        </h1>
        <p className="text-xl text-[#939393]">
          اربط متجرك وخدماتك الأساسية بكل سهولة
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-[15px] p-6 my-8 not-prose">
          <p className="text-black text-lg">
            هذه الصفحة مخصصة لتفعيل تكامل BOND IT مع متجر سلة. عند اشتراك العميل والدفع من داخل سلة، يتم ربط المتجر تلقائيًا وسحب بياناته مباشرة دون الحاجة لإعدادات معقدة.
          </p>
        </div>

        <h2 id="salla-integration">أولًا: تفعيل التكامل مع سلة</h2>

        <div className="bg-white rounded-[15px] overflow-hidden my-8 not-prose">
          <div className="bg-[#3B82F6] p-6">
            <div className="flex items-center gap-4">
              <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center">
                <ShoppingBag className="size-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">تفعيل تلقائي</h3>
                <p className="text-white/80">عند الاشتراك من داخل سلة، يقوم النظام تلقائيًا بـ:</p>
              </div>
            </div>
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">سحب اسم المتجر ورابطه.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">سحب جميع المنتجات.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">مزامنة صفحات المنتجات.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <p className="text-black">تحديث البيانات بشكل مستمر.</p>
            </div>

            <div className="bg-[#F7F7F7] rounded-[15px] p-4">
              <p className="font-semibold text-black">✅ ملاحظة:</p>
              <p className="text-black text-sm">
                يُعد تفعيل التكامل خطوة أساسية لتشغيل معظم مزايا النظام.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[15px] p-6 my-8 not-prose">
          <div className="flex items-start gap-4">
            <AlertTriangle className="size-8 text-[#3B82F6] shrink-0" />
            <div>
              <p className="font-bold text-lg mb-2 text-black">ملاحظة مهمة:</p>
              <p className="text-black">
                لا يمكن تفعيل الودجت أو الاستفادة الكاملة من المساعد الذكي إلا بعد اكتمال الربط مع سلة.
              </p>
            </div>
          </div>
        </div>

        <h3 id="salla-settings">إعدادات تكامل سلة</h3>

        <p>
          بعد التفعيل، يمكنك التحكم في:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
          <div className="bg-white rounded-[15px] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <Eye className="size-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-black">الودجت</h4>
            </div>
            <p className="text-black">إظهار أو إخفاء الودجت داخل المتجر.</p>
          </div>

          <div className="bg-white rounded-[15px] p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <RefreshCw className="size-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-black">التحديث اليدوي</h4>
            </div>
            <p className="text-black">إعادة مزامنة البيانات عند الحاجة.</p>
          </div>
        </div>

        <h2 id="openai-integration">ثانيًا: ربط OpenAI (المساعد الذكي)</h2>

        <div className="bg-white rounded-[15px] p-6 my-8 not-prose">
          <div className="flex items-center gap-4 mb-5">
            <div className="size-12 bg-[#3B82F6] rounded-lg flex items-center justify-center">
              <Sparkles className="size-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black">فعّل المساعد الذكي</h3>
          </div>

          <p className="text-black mb-4">
            يمكنك ربط حسابك مع OpenAI لتفعيل المساعد الذكي، الذي يساعدك في:
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">إنشاء محتوى تسويقي احترافي.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">كتابة أوصاف منتجات محسّنة لمحركات البحث.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">إنتاج محتوى متوافق مع SEO بسهولة.</p>
            </div>
          </div>

          <div className="bg-[#F7F7F7] rounded-[15px] p-4 mt-4">
            <p className="font-semibold text-black">🧠 كيف يعمل؟</p>
            <p className="text-black text-sm">
              يعمل المساعد بناءً على بيانات متجرك بالإضافة إلى البرومبت الذي تكتبه.
            </p>
          </div>
        </div>

        <h3 id="what-you-need">ما الذي تحتاجه؟</h3>

        <div className="bg-white rounded-[15px] p-6 my-6 not-prose">
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <Key className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
              <p className="text-black">مفتاح OpenAI API.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
              <p className="text-black">إدخاله مرة واحدة فقط داخل النظام.</p>
            </div>
          </div>
        </div>

        <h3 id="connection-steps">خطوات الربط:</h3>

        <div className="bg-white rounded-[15px] p-6 my-8 not-prose">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 bg-[#F7F7F7] rounded-[15px]">
              <div className="size-10 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1">
                <p className="text-black font-semibold mb-1">اضغط على "ربط"</p>
                <p className="text-[#939393] text-sm">ابدأ عملية الربط من واجهة التكاملات</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="h-8 w-0.5 bg-[#939393]"></div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F7F7F7] rounded-[15px]">
              <div className="size-10 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1">
                <p className="text-black font-semibold mb-1">أدخل مفتاح OpenAI API</p>
                <p className="text-[#939393] text-sm">الصق المفتاح في الحقل المخصص</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-8 w-0.5 bg-[#939393]"></div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F7F7F7] rounded-[15px]">
              <div className="size-10 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1">
                <p className="text-black font-semibold mb-1">اضغط "اختبار والمتابعة"</p>
                <p className="text-[#939393] text-sm">سيتم فحص صحة المفتاح</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-8 w-0.5 bg-[#939393]"></div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#F7F7F7] rounded-[15px]">
              <div className="size-10 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1">
                <p className="text-black font-semibold mb-1">التفعيل التلقائي</p>
                <p className="text-[#939393] text-sm">عند نجاح الاختبار يتم التفعيل مباشرة</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[15px] p-6 my-8 not-prose">
          <div className="flex items-start gap-4">
            <Shield className="size-8 text-[#3B82F6] shrink-0" />
            <div>
              <p className="font-bold text-lg mb-2 text-black">تنبيه أمني:</p>
              <p className="text-black">
                احتفظ بمفتاح الـ API في مكان آمن، ولا تشاركه مع أي طرف.
              </p>
            </div>
          </div>
        </div>

        <h2 id="tips">نصائح</h2>

        <div className="bg-white rounded-[15px] p-8 my-8 not-prose">
          <div className="flex items-start gap-4 mb-6">
            <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
            <h3 className="text-xl font-bold text-black">نصائح للاستخدام الأمثل</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <p className="text-black">تأكد من اكتمال الربط مع سلة قبل استخدام أي ميزة أخرى.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <p className="text-black">قم بتحديث البيانات يدويًا إذا أضفت منتجات جديدة.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <p className="text-black">استخدم المساعد الذكي ببرومبت واضح لتحصل على نتائج أفضل.</p>
            </div>
            <div className="flex items-start gap-3 p-4 bg-[#F7F7F7] rounded-[15px]">
              <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <p className="text-black">لا تشارك مفتاح API مع أي شخص للحفاظ على أمان حسابك.</p>
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
              <p className="text-black font-semibold text-lg">شرح فيديو: ربط التكاملات</p>
              <p className="text-[#939393] text-sm mt-2">سيتم إضافة الفيديو قريبًا</p>
            </div>
          </div>
          <div className="p-5 bg-white">
            <p className="text-[#939393] text-sm text-center">
              📹 شاهد شرح عملي خطوة بخطوة لربط متجرك مع سلة وتفعيل المساعد الذكي
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}