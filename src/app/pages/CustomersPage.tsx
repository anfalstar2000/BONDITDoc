import { Users, Activity, Award, TrendingUp, User, FileText, Filter, CheckCircle2, Lightbulb, Target, BarChart3 } from 'lucide-react';
export default function CustomersPage() {
 return (
 <div className="max-w-4xl">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 العملاء
 </h1>
 <p className="text-xl text-gray-500">
 مركز إدارة قاعدة عملائك داخل برنامج الولاء
 </p>
 </div>
 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <p className="text-black text-lg">
 تُعد صفحة العملاء مركز إدارة قاعدة عملائك داخل برنامج الولاء في BOND IT.
 </p>
 <p className="text-black font-semibold mt-3">
 من خلالها يمكنك متابعة نشاط العملاء، رصيد النقاط، مستوياتهم، وسجل تعاملاتهم، مع إمكانية تقسيمهم إلى مجموعات مخصصة (في باقات Plus و Pro).
 </p>
 </div>
 <h2 id="overview">نظرة عامة</h2>
 <p>
 في أعلى الصفحة تظهر بطاقات إحصائية توضح:
 </p>
 <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6">
 <div className="flex items-center gap-3 mb-3">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Users className="size-7 text-white" />
 </div>
 <div>
 <p className="text-sm text-gray-500">إجمالي العملاء</p>
 <p className="text-black font-bold text-lg">في البرنامج</p>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6">
 <div className="flex items-center gap-3 mb-3">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Activity className="size-7 text-white" />
 </div>
 <div>
 <p className="text-sm text-gray-500">العملاء النشطين</p>
 <p className="text-black font-bold text-lg">المتفاعلين حاليًا</p>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6">
 <div className="flex items-center gap-3 mb-3">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Award className="size-7 text-white" />
 </div>
 <div>
 <p className="text-sm text-gray-500">إجمالي النقاط</p>
 <p className="text-black font-bold text-lg">الممنوحة</p>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6">
 <div className="flex items-center gap-3 mb-3">
 <div className="size-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <TrendingUp className="size-7 text-white" />
 </div>
 <div>
 <p className="text-sm text-gray-500">متوسط النقاط</p>
 <p className="text-black font-bold text-lg">لكل عميل</p>
 </div>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-5 my-6 not-prose">
 <p className="text-black font-semibold">
 هذه المؤشرات تساعدك على فهم مستوى التفاعل العام داخل متجرك.
 </p>
 </div>
 <h2 id="customers-table">جدول العملاء</h2>
 <p>
 يعرض جميع العملاء المسجلين في البرنامج، ويتضمن:
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 overflow-hidden my-8 not-prose">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3">
 <BarChart3 className="size-6 text-white" />
 <h4 className="text-lg font-bold text-white">بيانات الجدول</h4>
 </div>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">اسم العميل.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">مستوى العميل (إن وجد).</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">رصيد النقاط الحالي.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">إجمالي النقاط المكتسبة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
 <p className="text-black">آخر نشاط.</p>
 </div>
 <div className="bg-gray-50 rounded p-4">
 <p className="font-semibold text-black"> إمكانية البحث:</p>
 <p className="text-black text-sm">
 يمكنك البحث عن أي عميل والدخول إلى ملفه التفصيلي.
 </p>
 </div>
 </div>
 </div>
 <h2 id="customer-profile">ملف العميل</h2>
 <p>
 عند فتح ملف عميل معين يمكنك معرفة:
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <User className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">معلومات الملف الشخصي</h3>
 </div>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">رصيد النقاط.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">سجل اكتساب واستبدال النقاط.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">المستوى الحالي.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">التحديات المكتملة أو الجارية.</p>
 </div>
 </div>
 <div className="bg-gray-50 rounded p-4 mt-4">
 <p className="font-semibold text-black"> تعديل يدوي:</p>
 <p className="text-black text-sm">
 كما يمكنك تعديل النقاط يدويًا عند الحاجة (لأغراض الدعم أو التصحيح).
 </p>
 </div>
 </div>
 <h2 id="customer-groups">مجموعات العملاء</h2>
 <div className="bg-[#3B82F6] rounded-none text-white p-6 my-6 not-prose">
 <p className="text-lg font-semibold text-center">
 متوفرة في باقات Plus و Pro
 </p>
 </div>
 <p>
 تتيح لك هذه الميزة تقسيم عملائك إلى شرائح بناءً على سلوكهم داخل المتجر.
 </p>
 <p>
 بدل التعامل مع جميع العملاء بنفس الطريقة، يمكنك إنشاء مجموعات مخصصة مثل:
 </p>
 <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-5">
 <div className="flex items-start gap-3">
 <span className="size-7 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">1</span>
 <p className="text-black font-semibold">العملاء غير النشطين</p>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-5">
 <div className="flex items-start gap-3">
 <span className="size-7 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">2</span>
 <p className="text-black font-semibold">العملاء القريبين من مكافأة</p>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-5">
 <div className="flex items-start gap-3">
 <span className="size-7 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">3</span>
 <p className="text-black font-semibold">كبار العملاء حسب الإنفاق</p>
 </div>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-5">
 <div className="flex items-start gap-3">
 <span className="size-7 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center font-bold">4</span>
 <p className="text-black font-semibold">عملاء مستوى معين</p>
 </div>
 </div>
 </div>
 <h3 id="why-groups">لماذا تستخدم المجموعات؟</h3>
 <p>
 المجموعات تساعدك على:
 </p>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Target className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">الفوائد الرئيسية</h3>
 </div>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">إطلاق حملات أكثر دقة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">استهداف شريحة محددة برسالة أو تحدٍ معين.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تقليل العروض العامة غير الفعالة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">رفع معدل التحويل من خلال استهداف ذكي.</p>
 </div>
 </div>
 </div>
 <h2 id="difference">الفرق بين المستويات والمجموعات</h2>
 <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Award className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">المستويات</h4>
 </div>
 <p className="text-black text-lg">
 تعتمد على ترقية رسمية داخل برنامج الولاء.
 </p>
 </div>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6">
 <div className="flex items-center gap-3 mb-4">
 <div className="size-10 bg-[#3B82F6] rounded-full flex items-center justify-center">
 <Filter className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">المجموعات</h4>
 </div>
 <p className="text-black text-lg">
 أداة مرنة لتقسيم العملاء لأغراض تحليلية وتسويقية دون تغيير مستواهم.
 </p>
 </div>
 </div>
 <h2 id="tip">نصيحة عملية</h2>
 <div className="bg-white rounded-none hover:bg-gray-50 transition-colors border border-gray-200 p-6 my-8 not-prose">
 <div className="flex items-start gap-4 mb-5">
 <Lightbulb className="size-10 text-[#3B82F6] shrink-0" />
 <h3 className="text-2xl font-bold text-black">استخدم البيانات بذكاء</h3>
 </div>
 <div className="bg-gray-50 rounded p-6">
 <div className="space-y-4">
 <div className="flex items-start gap-3">
 <div className="size-8 shrink-0 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <FileText className="size-5 text-white" />
 </div>
 <p className="text-black text-lg">
 استخدم صفحة العملاء لفهم سلوك عملائك،
 </p>
 </div>
 <div className="flex items-start gap-3">
 <div className="size-8 shrink-0 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Target className="size-5 text-white" />
 </div>
 <p className="text-black text-lg">
 واستخدم المجموعات لاتخاذ قرارات تسويقية أدق بدل الحملات العشوائية.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
