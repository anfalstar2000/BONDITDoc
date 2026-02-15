import { Check, X, Star, Sparkles, Crown, Users, Target, TrendingUp, Shield, Lightbulb } from 'lucide-react';

export default function SuccessStoriesPage() {
  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          كيف اختار الباقة المناسبة لي؟
        </h1>
        <p className="text-xl text-[#939393]">
          مقارنة شاملة لمساعدتك في اختيار الباقة المثالية لمتجرك
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="bg-white rounded-none p-6 my-8 not-prose">
          <p className="text-black text-lg">
            نوفر لك ثلاث باقات مصممة لتناسب احتياجات متجرك حسب حجم النشاط وعدد الطلبات الشهرية.
            اختار الباقة اللي تناسب طموحاتك، وترقّى وقتما تحتاج!
          </p>
        </div>

        <h2 id="comparison">مقارنة الباقات</h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 my-12 not-prose">
          {/* Lite Plan */}
          <div className="bg-white rounded-none overflow-hidden">
            <div className="bg-white p-6">
              <div className="inline-block bg-[#F7F7F7] rounded-none text-black px-4 py-1 text-sm font-semibold mb-4">
                متاجر صغيرة
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">باقة بوند لايت</h3>
              <p className="text-[#939393] text-sm mb-6">
                ابدأ رحلة الولاء بنظام متكامل وأدوات للمتاجر الصغيرة
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-black">65</span>
                <span className="text-[#939393]">ريال / شهرياً</span>
              </div>
              <p className="text-sm text-[#939393]">غير شامل الضريبة المضافة</p>
            </div>

            <div className="p-6">
              <div className="bg-[#F7F7F7] rounded-none p-4 mb-6 text-center">
                <p className="text-sm text-[#939393] mb-1">ونش نقدم لك فيها:</p>
                <p className="text-2xl font-bold text-black">250 طلب شهرياً</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">نظام ولاء متكامل وأدوات</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">برنامج إحالة</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">بطاقة ولاء قابلة للتخصيص</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">تقارير مفصلة للبيانات</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">تسهيلات البريد الإلكتروني</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">1 مستخدم</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">2 مستويات</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">3 مكافآت</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">2 تحديات</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="size-5 text-[#939393] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#939393]">إزالة شعار BOND IT (+15 ريال)</span>
                </li>
              </ul>

              <a 
                href="https://apps.salla.sa/ar/app/1944068071" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#F7F7F7] hover:bg-[#3B82F6] hover:text-white text-black font-bold transition-all text-center rounded-none"
              >
                اختر هذه الباقة
              </a>
            </div>
          </div>

          {/* Plus Plan - Recommended */}
          <div className="bg-white rounded-none overflow-hidden relative">
            <div className="absolute top-4 left-4 bg-[#3B82F6] text-white px-4 py-1 text-sm font-bold rounded-none">
              ننصح بها ⭐
            </div>
            <div className="bg-[#3B82F6] p-6 text-white">
              <div className="inline-block bg-white/20 rounded-none text-white px-4 py-1 text-sm font-semibold mb-4">
                ننصح بها
              </div>
              <h3 className="text-3xl font-bold mb-2">باقة بوند بلس</h3>
              <p className="text-white/90 text-sm mb-6">
                الخيار الأفضل للمتاجر المتوسطة والناشئة
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">299</span>
                <span className="text-white/90">ريال / شهرياً</span>
              </div>
              <p className="text-sm text-white/80">غير شامل الضريبة المضافة</p>
            </div>

            <div className="p-6">
              <div className="bg-[#F7F7F7] rounded-none p-4 mb-6 text-center">
                <p className="text-sm text-[#939393] mb-1">ونش نقدم لك فيها:</p>
                <p className="text-2xl font-bold text-black">1,000 طلب شهرياً</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black font-semibold">جميع مميزات لايت</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">مساعد ذكي، لصناعة محتوى، SEO</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">رصيد حملات بريدية: 2,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">تصنيف العملاء حسب السلوك</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">3 مستخدمين</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">5 مستويات</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">8 مكافآت</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">6 تحديات</span>
                </li>
              </ul>

              <a 
                href="https://apps.salla.sa/ar/app/1944068071" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#3B82F6] hover:opacity-90 text-white font-bold transition-all text-center rounded-full"
              >
                اختر هذه الباقة
              </a>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-none overflow-hidden">
            <div className="bg-white p-6">
              <div className="inline-block bg-[#F7F7F7] rounded-none text-black px-4 py-1 text-sm font-semibold mb-4">
                متاجر كبيرة
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">باقة بوند برو</h3>
              <p className="text-[#939393] text-sm mb-6">
                حلول شاملة تناسب للمتاجر الكبيرة والشركات
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-black">499</span>
                <span className="text-[#939393]">ريال / شهرياً</span>
              </div>
              <p className="text-sm text-[#939393]">غير شامل الضريبة المضافة</p>
            </div>

            <div className="p-6">
              <div className="bg-[#F7F7F7] rounded-none p-4 mb-6 text-center">
                <p className="text-sm text-[#939393] mb-1">ونش نقدم لك فيها:</p>
                <p className="text-2xl font-bold text-black">5,000 طلب شهرياً</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black font-semibold">جميع مميزات بلس</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">رصيد حملات بريدية: 5,000</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">6 مستخدمين</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">8 مستويات</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">15 مكافأة</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="text-sm text-black">12 تحديات</span>
                </li>
              </ul>

              <a 
                href="https://apps.salla.sa/ar/app/1944068071" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#F7F7F7] hover:bg-[#3B82F6] hover:text-white text-black font-bold transition-all text-center rounded-none"
              >
                اختر هذه الباقة
              </a>
            </div>
          </div>
        </div>

        <h2 id="how-to-choose">كيف تختار الباقة المناسبة؟</h2>

        <div className="bg-white p-8 my-8 not-prose">
          <div className="flex items-start gap-4 mb-6">
            <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
            <h3 className="text-xl font-bold text-black">دليل الاختيار</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-[#F7F7F7] p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="size-10 bg-white flex items-center justify-center shrink-0">
                  <Users className="size-6 text-[#939393]" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">باقة لايت - للمتاجر الصغيرة</h4>
                  <p className="text-black text-sm mb-3">
                    مثالية إذا كان متجرك جديد أو لديك أقل من 250 طلب شهرياً. تحصل على كل الأدوات الأساسية للبداية بسعر مناسب.
                  </p>
                  <div className="bg-white p-3">
                    <p className="text-sm text-[#939393]">
                      ✅ <strong className="text-black">اختر هذه الباقة إذا:</strong> بدأت للتو أو تريد تجربة نظام الولاء بدون التزام كبير.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F7F7] p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="size-10 bg-[#3B82F6] flex items-center justify-center shrink-0">
                  <Star className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">باقة بلس - الأكثر شيوعاً ⭐</h4>
                  <p className="text-black text-sm mb-3">
                    الخيار الأمثل للمتاجر المتوسطة والنامية. تحصل على المساعد الذكي، تصنيف العملاء، وحملات بريدية أكثر.
                  </p>
                  <div className="bg-white p-3">
                    <p className="text-sm text-[#939393]">
                      ⭐ <strong className="text-black">ننصح بها إذا:</strong> لديك من 250-1,000 طلب شهرياً وتريد أدوات تسويقية ذكية لزيادة المبيعات.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F7F7F7] p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="size-10 bg-black flex items-center justify-center shrink-0">
                  <Crown className="size-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">باقة برو - للمتاجر الكبيرة</h4>
                  <p className="text-black text-sm mb-3">
                    مصممة للمتاجر الكبيرة والشركات التي تحتاج سعة أكبر، فريق عمل متعدد، وإمكانيات لا محدودة.
                  </p>
                  <div className="bg-white p-3">
                    <p className="text-sm text-[#939393]">
                      👑 <strong className="text-black">اختر هذه الباقة إذا:</strong> لديك أكثر من 1,000 طلب شهرياً وتحتاج إلى أقصى قدر من المرونة والتحكم.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="features-comparison">مقارنة تفصيلية للميزات</h2>

        <div className="overflow-x-auto my-8 not-prose">
          <table className="w-full border-collapse bg-white overflow-hidden">
            <thead>
              <tr className="bg-[#3B82F6]">
                <th className="text-right p-4 text-white font-bold">الميزة</th>
                <th className="text-center p-4 text-white font-bold">لايت</th>
                <th className="text-center p-4 text-white font-bold">بلس ⭐</th>
                <th className="text-center p-4 text-white font-bold">برو</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 text-black">عدد الطلبات الشهرية</td>
                <td className="p-4 text-center text-black font-semibold">250</td>
                <td className="p-4 text-center text-[#3B82F6] font-bold bg-[#F7F7F7]">1,000</td>
                <td className="p-4 text-center text-black font-semibold">5,000</td>
              </tr>
              <tr>
                <td className="p-4 text-black">عدد المستخدمين</td>
                <td className="p-4 text-center text-black">1</td>
                <td className="p-4 text-center text-black bg-[#F7F7F7]">3</td>
                <td className="p-4 text-center text-black">6</td>
              </tr>
              <tr>
                <td className="p-4 text-black">المستويات</td>
                <td className="p-4 text-center text-black">2</td>
                <td className="p-4 text-center text-black bg-[#F7F7F7]">5</td>
                <td className="p-4 text-center text-black">8</td>
              </tr>
              <tr>
                <td className="p-4 text-black">المكافآت</td>
                <td className="p-4 text-center text-black">3</td>
                <td className="p-4 text-center text-black bg-[#F7F7F7]">8</td>
                <td className="p-4 text-center text-black">15</td>
              </tr>
              <tr>
                <td className="p-4 text-black">التحديات</td>
                <td className="p-4 text-center text-black">2</td>
                <td className="p-4 text-center text-black bg-[#F7F7F7]">6</td>
                <td className="p-4 text-center text-black">12</td>
              </tr>
              <tr>
                <td className="p-4 text-black">حملات بريدية</td>
                <td className="p-4 text-center text-black">-</td>
                <td className="p-4 text-center text-black bg-[#F7F7F7]">2,000</td>
                <td className="p-4 text-center text-black">5,000</td>
              </tr>
              <tr>
                <td className="p-4 text-black">المساعد الذكي (AI)</td>
                <td className="p-4 text-center"><X className="size-5 text-[#939393] mx-auto" /></td>
                <td className="p-4 text-center bg-[#F7F7F7]"><Check className="size-5 text-[#3B82F6] mx-auto" /></td>
                <td className="p-4 text-center"><Check className="size-5 text-[#3B82F6] mx-auto" /></td>
              </tr>
              <tr>
                <td className="p-4 text-black">تصنيف العملاء</td>
                <td className="p-4 text-center"><X className="size-5 text-[#939393] mx-auto" /></td>
                <td className="p-4 text-center bg-[#F7F7F7]"><Check className="size-5 text-[#3B82F6] mx-auto" /></td>
                <td className="p-4 text-center"><Check className="size-5 text-[#3B82F6] mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 id="tips">نصائح مهمة قبل الاختيار</h2>

        <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
          <div className="bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-[#3B82F6] flex items-center justify-center">
                <TrendingUp className="size-6 text-white" />
              </div>
              <h4 className="font-bold text-black">ابدأ صغيراً، وترقّى لاحقاً</h4>
            </div>
            <p className="text-black text-sm">
              لا تقلق من البداية بباقة صغيرة. يمكنك الترقية في أي وقت عندما يكبر نشاطك. الأهم أن تبدأ!
            </p>
          </div>

          <div className="bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-[#3B82F6] flex items-center justify-center">
                <Target className="size-6 text-white" />
              </div>
              <h4 className="font-bold text-black">احسب طلباتك الشهرية</h4>
            </div>
            <p className="text-black text-sm">
              راجع عدد الطلبات في آخر 3 أشهر واختار الباقة اللي تغطي احتياجك + هامش للنمو.
            </p>
          </div>

          <div className="bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-[#3B82F6] flex items-center justify-center">
                <Sparkles className="size-6 text-white" />
              </div>
              <h4 className="font-bold text-black">المساعد الذكي يستحق</h4>
            </div>
            <p className="text-black text-sm">
              إذا كنت تحتاج محتوى تسويقي أو وصف منتجات محسّن، باقة بلس توفر عليك وقت ومجهود كبير.
            </p>
          </div>

          <div className="bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 bg-[#3B82F6] flex items-center justify-center">
                <Shield className="size-6 text-white" />
              </div>
              <h4 className="font-bold text-black">جرّب دون التزام طويل</h4>
            </div>
            <p className="text-black text-sm">
              اشتراكك شهري، تقدر تلغي أو تعدّل في أي وقت. ما فيه التزام سنوي أو رسوم إلغاء.
            </p>
          </div>
        </div>

        <div className="bg-black text-white p-10 my-12 not-prose">
          <h3 className="text-3xl font-bold mb-4">محتار؟ نساعدك! 💬</h3>
          <p className="text-[#939393] text-lg mb-6">
            إذا ما زلت محتار أي باقة تناسبك، فريق الدعم جاهز لمساعدتك في اختيار الباقة المثالية بناءً على حجم متجرك وأهدافك.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:Support@bonditloyalty.io"
              className="px-6 py-3 bg-[#3B82F6] text-white hover:opacity-90 rounded-full font-bold transition-all inline-block"
            >
              تواصل مع الدعم
            </a>
            <a 
              href="https://apps.salla.sa/ar/app/1944068071"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black hover:bg-[#F7F7F7] rounded-full font-bold transition-all inline-block"
            >
              اشترك الآن
            </a>
          </div>
        </div>

        {/* Discount Code Section */}
        <div className="bg-white p-8 my-8 not-prose">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="size-8 text-[#3B82F6]" />
                <h3 className="text-2xl font-bold text-black">عرض خاص! 🎉</h3>
              </div>
              <p className="text-black text-lg mb-2">
                احصل على خصم <strong className="text-[#3B82F6]">25%</strong> عند الاشتراك في أي باقة
              </p>
              <p className="text-[#939393] text-sm">
                استخدم كود الخصم عند الدفع واستمتع بكل مزايا BOND IT بسعر أفضل
              </p>
            </div>
            <div className="bg-[#F7F7F7] p-6">
              <p className="text-sm text-[#939393] mb-2 text-center">كود الخصم</p>
              <div className="bg-[#3B82F6] text-white px-8 py-4 text-center">
                <p className="text-3xl font-bold tracking-wider font-mono">SP25BOND</p>
              </div>
              <p className="text-xs text-[#939393] mt-2 text-center">انسخ الكود عند الاشتراك</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}