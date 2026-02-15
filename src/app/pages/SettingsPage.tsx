import { Settings, Building2, User, Shield, Bell, Users, CreditCard, Globe, Calendar, Clock, DollarSign, Activity, FileText, Lock, Mail, Phone, MapPin, AlertCircle, CheckCircle2, Lightbulb, Key, Smartphone, TrendingUp, Crown, UserCheck } from 'lucide-react';

export default function SettingsPage() {
 return (
 <div className="max-w-4xl">
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-black mb-4">
 الإعدادات
 </h1>
 <p className="text-xl text-gray-500">
 تحكّم بكامل إعدادات الحساب والأمان والفريق
 </p>
 </div>

 <div className="prose prose-lg max-w-none">
 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <p className="text-black text-lg mb-3">
 تمكّنك صفحة الإعدادات في نظام BOND IT من التحكم بكامل إعدادات الحساب، الأمان، الإشعارات، الفريق، والفوترة، لضمان تشغيل النظام بسلاسة وفق احتياج متجرك وتفضيلاتك.
 </p>
 <p className="text-black font-semibold">
 صفحة الإعدادات هي المكان الرئيسي لإدارة إعدادات حسابك داخل النظام. من خلالها يمكنك التحكم في بيانات شركتك، حسابك الشخصي، الأمان، الإشعارات، الفريق، والفوترة.
 </p>
 </div>

 <h2 id="main-sections">الأقسام الرئيسية</h2>

 <div className="grid md:grid-cols-3 gap-4 my-8 not-prose">
 <div className="bg-white rounded-none border border-gray-100 p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Building2 className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">عام</h4>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <User className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">الحساب</h4>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Shield className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">الأمان</h4>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Bell className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">الإشعارات</h4>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Users className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">الفريق</h4>
 </div>
 </div>

 <div className="bg-white rounded-none border border-gray-100 p-5">
 <div className="flex items-center gap-3 mb-2">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <CreditCard className="size-6 text-white" />
 </div>
 <h4 className="text-lg font-bold text-black">الفواتير</h4>
 </div>
 </div>
 </div>

 <h2 id="general">أولًا: عام</h2>

 <p>
 يُستخدم هذا القسم لإدارة بيانات الشركة والإعدادات العامة للنظام.
 </p>

 <div className="bg-white rounded-none border border-gray-100 overflow-hidden my-8 not-prose">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3">
 <Building2 className="size-7 text-white" />
 <h4 className="text-xl font-bold text-white">إعدادات الشركة</h4>
 </div>
 </div>
 <div className="p-6 space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Building2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">اسم الشركة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Globe className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">اللغة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Globe className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">المنطقة الزمنية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Calendar className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تنسيق التاريخ.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Clock className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تنسيق الوقت.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <DollarSign className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">العملة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Activity className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">النشاط.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <FileText className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">وصف الشركة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <FileText className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">روابط سياسة الخصوصية وشروط الخدمة.</p>
 </div>

 <div className="bg-gray-50 rounded-none p-4">
 <p className="font-semibold text-black"> الهدف:</p>
 <p className="text-black text-sm">
 يساعد هذا القسم على ضبط هوية الشركة وطريقة عرض البيانات داخل النظام.
 </p>
 </div>
 </div>
 </div>

 <h2 id="account">ثانيًا: الحساب</h2>

 <p>
 هذا القسم مخصص لإدارة بياناتك الشخصية داخل النظام.
 </p>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <User className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">البيانات الشخصية</h3>
 </div>

 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <User className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">الصورة الشخصية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <User className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">الاسم الكامل.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Mail className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">البريد الإلكتروني.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Phone className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">رقم الجوال.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <MapPin className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">المدينة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <MapPin className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">العنوان.</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4 mt-4">
 <p className="font-semibold text-black"> تحديث مستمر:</p>
 <p className="text-black text-sm">
 يمكنك تحديث بياناتك في أي وقت لضمان صحة معلومات التواصل.
 </p>
 </div>
 </div>

 <h2 id="security">ثالثًا: الأمان</h2>

 <p>
 يُستخدم لحماية حسابك وإدارة تسجيل الدخول.
 </p>

 <div className="bg-white rounded-none border border-gray-100 overflow-hidden my-8 not-prose">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3">
 <Shield className="size-7 text-white" />
 <h4 className="text-xl font-bold text-white">حماية الحساب</h4>
 </div>
 </div>
 <div className="p-6 space-y-4">
 <div className="bg-gray-50 p-5 rounded-none">
 <div className="flex items-center gap-3 mb-4">
 <Lock className="size-6 text-[#3B82F6]" />
 <h5 className="font-bold text-black">تغيير كلمة المرور</h5>
 </div>
 <div className="space-y-3 mr-9">
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">كلمة المرور الحالية.</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">كلمة المرور الجديدة.</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">تأكيد كلمة المرور الجديدة.</p>
 </div>
 </div>
 </div>

 <div className="bg-gray-50 p-5 rounded-none">
 <div className="flex items-center gap-3">
 <AlertCircle className="size-6 text-[#3B82F6]" />
 <h5 className="font-bold text-black">تنبيهات تسجيل الدخول</h5>
 </div>
 <p className="text-black mt-3 mr-9">
 يمكنك تفعيل إشعار عند أي تسجيل دخول جديد لحماية حسابك.
 </p>
 </div>
 </div>
 </div>

 <h2 id="notifications">رابعًا: الإشعارات</h2>

 <p>
 يمكنك من هنا التحكم في أنواع الإشعارات التي ترغب باستلامها.
 </p>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <Bell className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">أنواع الإشعارات</h3>
 </div>

 <div className="grid md:grid-cols-2 gap-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Mail className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">إشعارات البريد الإلكتروني.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Bell className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">الإشعارات الفورية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Smartphone className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">إشعارات الرسائل النصية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CreditCard className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تنبيهات المعاملات.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <AlertCircle className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تنبيهات الرصيد المنخفض.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <FileText className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">التقارير الشهرية.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <TrendingUp className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تحديثات النظام.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Activity className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">الرسائل الترويجية.</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4 mt-4">
 <p className="font-semibold text-black"> تحكم كامل:</p>
 <p className="text-black text-sm">
 يمكن تفعيل أو إيقاف كل نوع حسب تفضيلك.
 </p>
 </div>
 </div>

 <h2 id="team">خامسًا: الفريق</h2>

 <p>
 يُستخدم لإدارة أعضاء الفريق وصلاحياتهم داخل النظام.
 </p>

 <div className="bg-white rounded-none border border-gray-100 overflow-hidden my-8 not-prose">
 <div className="bg-[#3B82F6] p-5">
 <div className="flex items-center gap-3">
 <Users className="size-7 text-white" />
 <h4 className="text-xl font-bold text-white">إدارة الفريق</h4>
 </div>
 </div>
 <div className="p-6 space-y-4">
 <div className="bg-gray-50 p-5 rounded-none">
 <h5 className="font-bold text-black mb-4">يمكنك:</h5>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">عرض أعضاء الفريق.</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">إضافة عضو جديد.</p>
 </div>
 <div className="flex items-start gap-3 p-3 bg-white rounded-none border border-gray-100">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تحديد دور وصلاحيات كل عضو.</p>
 </div>
 </div>
 </div>

 <div className="bg-gray-50 p-5 rounded-none">
 <h5 className="font-bold text-black mb-4">الأدوار المتاحة:</h5>
 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <Crown className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <div>
 <p className="text-black font-semibold">مسؤول</p>
 <p className="text-gray-500 text-sm">بصلاحيات كاملة.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <Activity className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <div>
 <p className="text-black font-semibold">مسوق</p>
 <p className="text-gray-500 text-sm">للحملات والمحتوى.</p>
 </div>
 </div>
 <div className="flex items-start gap-3 p-4 bg-white rounded-none border border-gray-100">
 <DollarSign className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <div>
 <p className="text-black font-semibold">مدير مالي</p>
 <p className="text-gray-500 text-sm">للتقارير والفواتير.</p>
 </div>
 </div>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4">
 <p className="font-semibold text-black"> التنظيم:</p>
 <p className="text-black text-sm">
 يساعد هذا في تنظيم العمل وتوزيع المسؤوليات.
 </p>
 </div>
 </div>
 </div>

 <h2 id="billing">سادسًا: الفواتير</h2>

 <p>
 يُستخدم لإدارة خطة الاشتراك الحالية ومتابعة الفوترة.
 </p>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <div className="flex items-center gap-3 mb-5">
 <div className="size-10 bg-[#3B82F6] rounded-none flex items-center justify-center">
 <CreditCard className="size-6 text-white" />
 </div>
 <h3 className="text-xl font-bold text-black">معلومات الاشتراك</h3>
 </div>

 <div className="space-y-3">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <FileText className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">اسم الباقة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <CheckCircle2 className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">حالة الاشتراك.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <DollarSign className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">السعر ودورة الدفع.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Calendar className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تاريخ بداية الاشتراك.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <Calendar className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">تاريخ الدفعة القادمة.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <TrendingUp className="size-6 text-[#3B82F6] shrink-0 mt-0.5" />
 <p className="text-black">حدود الاستخدام داخل الباقة.</p>
 </div>
 </div>

 <div className="bg-gray-50 rounded-none p-4 mt-4">
 <p className="font-semibold text-black"> المتابعة:</p>
 <p className="text-black text-sm">
 كما يمكنك متابعة استهلاك الخدمات المختلفة داخل خطتك.
 </p>
 </div>
 </div>

 <h2 id="tips">نصائح</h2>

 <div className="bg-white rounded-none border border-gray-100 p-6 my-8 not-prose">
 <div className="flex items-start gap-4 mb-6">
 <Lightbulb className="size-8 text-[#3B82F6] shrink-0" />
 <h3 className="text-xl font-bold text-black">نصائح مهمة</h3>
 </div>
 
 <div className="space-y-4">
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
 <p className="text-black">تأكد من صحة بيانات الشركة لأنها تظهر في التقارير والإشعارات.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
 <p className="text-black">فعّل تنبيهات تسجيل الدخول لحماية الحساب.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
 <p className="text-black">وزّع الصلاحيات داخل الفريق حسب المهام.</p>
 </div>
 <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-none">
 <span className="size-6 shrink-0 bg-[#3B82F6] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
 <p className="text-black">راقب حدود الاستخدام لتجنب تجاوز باقتك.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}