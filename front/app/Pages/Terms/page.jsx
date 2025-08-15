'use client'
import React from 'react'
import Link from 'next/link'
import { ShieldAlert, FileText, Link2, Scale, UserCheck, Building2, Mail, Globe, Download, ScrollText, Info } from 'lucide-react'
import { motion } from 'framer-motion'

// صفحة الشروط والأحكام (عربي) بتصميم متناسق مع ثيم نادي الزمالك
// ملاحظات:
// - تعتمد على Tailwind CSS
// - ألوان: أبيض خلفية، أحمر زملكاوي للعناوين والحدود، رمادي للنصوص
// - RTL جاهز، مع جدول محتويات جانبي وروابط أقسام
// - زر طباعة/تنزيل (يطبع الصفحة PDF عبر المتصفح)

const sections = [
  {
    id: 'ownership',
    title: '1) الملكية الفكرية',
    icon: <ShieldAlert className="w-5 h-5" aria-hidden/>,
    content: `جميع الحقوق محفوظة لنادي الزمالك الرياضي بما في ذلك الشعار، الهوية البصرية، النصوص، الصور، التصاميم، الفيديوهات،
    والمواد السمعية والبصرية المنشورة عبر الموقع. لا يجوز إعادة إنتاج أو توزيع أو تعديل أي جزء من المحتوى بدون تصريح كتابي
    مسبق من إدارة النادي.`
  },
  {
    id: 'use',
    title: '2) استخدام الموقع',
    icon: <UserCheck className="w-5 h-5" aria-hidden/>,
    content: `يلتزم المستخدم باستخدام الموقع لأغراض قانونية وشخصية فقط، والامتناع عن أي نشاط يسيء لسمعة النادي أو جماهيره،
    أو ينتهك القوانين المحلية والدولية، أو يعرّض أمن الموقع للخطر بما في ذلك محاولات الاختراق أو تعطيل الخدمات.`
  },
  {
    id: 'content',
    title: '3) دقة المحتوى والأخبار',
    icon: <FileText className="w-5 h-5" aria-hidden/>,
    content: `نحرص على نشر معلومات دقيقة وآنية، ومع ذلك قد تحتوي بعض المواد على أخطاء غير مقصودة أو تحديثات لاحقة.
    يحتفظ النادي بالحق في تعديل أو تصحيح أو تحديث المحتوى دون إشعار مسبق.`
  },
  {
    id: 'links',
    title: '4) الروابط الخارجية',
    icon: <Link2 className="w-5 h-5" aria-hidden/>,
    content: `قد يتضمن الموقع روابط لمواقع أو منصات خارجية لا يملكها النادي. لا يتحمل النادي مسؤولية محتوى أو سياسات تلك المواقع،
    ويُنصح بمراجعة شروط الاستخدام وسياسات الخصوصية الخاصة بها.`
  },
  {
    id: 'privacy',
    title: '5) الخصوصية وحماية البيانات',
    icon: <ScrollText className="w-5 h-5" aria-hidden/>,
    content: `نولي خصوصيتك أهمية قصوى. تُعالج البيانات الشخصية وفق القوانين واللوائح المعمول بها.
    عند استخدام نماذج التواصل أو التسجيل، قد نجمع بيانات أساسية لتقديم الخدمة وتحسين التجربة. لمزيد من التفاصيل،
    يُرجى مراجعة سياسة الخصوصية.`
  },
  {
    id: 'liability',
    title: '6) حدود المسؤولية',
    icon: <Scale className="w-5 h-5" aria-hidden/>,
    content: `لا يتحمل النادي المسؤولية عن أي أضرار مباشرة أو غير مباشرة تنتج عن استخدام الموقع أو عدم القدرة على استخدامه،
    بما في ذلك فقدان البيانات أو توقف الخدمة أو أخطاء تقنية خارجة عن إرادتنا.`
  },
  {
    id: 'changes',
    title: '7) التعديلات على الشروط',
    icon: <Info className="w-5 h-5" aria-hidden/>,
    content: `يحتفظ النادي بحقه في تعديل هذه الشروط والأحكام في أي وقت. تسري التعديلات فور نشرها على هذه الصفحة،
    ويُعد استمرار استخدامك للموقع موافقة ضمنية على الشروط المعدَّلة.`
  },
  {
    id: 'jurisdiction',
    title: '8) القانون والاختصاص القضائي',
    icon: <Building2 className="w-5 h-5" aria-hidden/>,
    content: `تخضع هذه الشروط والأحكام لقوانين جمهورية مصر العربية، ويكون الاختصاص الحصري لمحاكم القاهرة في الفصل في أي نزاعات تنشأ عنها.`
  },
  {
    id: 'contact',
    title: '9) التواصل معنا',
    icon: <Mail className="w-5 h-5" aria-hidden/>,
    content: `لأي استفسارات تتعلق بهذه الشروط والأحكام، يُرجى التواصل عبر صفحة اتصل بنا أو البريد الإلكتروني الرسمي الخاص بالنادي.`
  },
]

export default function TermsPageZamalek() {
  const lastUpdated = 'آخر تحديث: 13 أغسطس 2025'

  return (
    <div dir="rtl" className="relative min-h-screen bg-white text-gray-800">
      {/* خلفية خطوط قُطْرية مستوحاة من قميص الزمالك */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-10 w-[1200px] h-[12px] rotate-[-18deg] bg-red-600/10" />
        <div className="absolute -right-20 top-10 w-[1200px] h-[6px] rotate-[-18deg] bg-red-600/10" />
        <div className="absolute -right-10 top-20 w-[1200px] h-[4px] rotate-[-18deg] bg-red-600/10" />
      </div>

      {/* شريط علوي/مسار تنقّل */}
      <div className="w-full border-b border-red-100 bg-white/80 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-red-700">الرئيسية</Link>
            <span className="mx-2">/</span>
            <span className="text-red-700 font-medium">الشروط والأحكام</span>
          </nav>
          <span className="text-xs text-gray-500">{lastUpdated}</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-5 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* جدول محتويات جانبي */}
        <aside className="lg:col-span-3 order-2 lg:order-1">
          <div className="sticky top-20">
            <div className="border border-red-200 rounded-2xl p-4 bg-white shadow-sm">
              <h2 className="text-red-700 font-bold mb-3">جدول المحتويات</h2>
              <ul className="space-y-2 text-sm">
                {sections.map(s => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="group flex items-center gap-2 hover:text-red-700">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => typeof window !== 'undefined' && window.print()}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-red-600 text-red-700 px-3 py-2 hover:bg-red-50"
              >
                <Download className="w-4 h-4" /> تنزيل/طباعة PDF
              </button>
            </div>
          </div>
        </aside>

        {/* المحتوى الرئيسي */}
        <section className="lg:col-span-9 order-1 lg:order-2">
          {/* رأس الصفحة */}
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-3">الشروط والأحكام – موقع نادي الزمالك</h1>
            <p className="text-gray-600 leading-relaxed">
              باستخدامك للموقع الرسمي لنادي الزمالك، فإنك توافق على الالتزام بالشروط والأحكام التالية. نرجو قراءة البنود جيدًا لضمان تجربة آمنة واحترافية.
            </p>
          </motion.header>

          {/* البطاقات */}
          <div className="space-y-5">
            {sections.map((s, idx) => (
              <motion.article
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="rounded-2xl border border-red-100 bg-white shadow-sm p-5 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-2 text-red-700">
                  {s.icon}
                  <h2 className="text-xl md:text-2xl font-bold">{s.title}</h2>
                </div>
                <p className="text-gray-800 leading-loose whitespace-pre-line">{s.content}</p>
              </motion.article>
            ))}
          </div>

          {/* ذيل الصفحة */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-red-100 pt-6">
            <div className="text-sm text-gray-600">
              لمزيد من المعلومات، يُرجى مراجعة <Link href="/privacy" className="text-red-700 hover:underline">سياسة الخصوصية</Link> و
              <Link href="/Contact" className="text-red-700 hover:underline mr-1">اتصل بنا</Link>.
            </div>
            <a href="#top" className="text-red-700 hover:underline">العودة للأعلى</a>
          </div>
        </section>
      </main>

      {/* فوتر خفيف للصفحة */}
      <footer className="border-t border-red-100 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} نادي الزمالك الرياضي. جميع الحقوق محفوظة.
      </footer>
    </div>
  )
}
