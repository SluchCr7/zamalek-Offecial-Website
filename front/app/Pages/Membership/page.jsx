'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  CheckCircle,
  CreditCard,
  User,
  Users,
  Calendar,
  Upload,
  X
} from 'lucide-react'
import { PLANS } from '@/utils/data'


/* ---------- Small UI bits ---------- */
const Icon = ({ children }) => (
  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600">
    {children}
  </div>
)

/* ---------- Main Page ---------- */
export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState(PLANS[1].id)
  const [form, setForm] = useState({
    fullName: '',
    nationalId: '',
    phone: '',
    email: '',
    plan: selectedPlan,
    paymentMethod: 'full',
    files: null
  })
  const [submitting, setSubmitting] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'الاسم الكامل مطلوب'
    if (!form.nationalId.trim()) e.nationalId = 'الرقم القومي مطلوب'
    if (!/^\d{10,15}$/.test(form.phone)) e.phone = 'رقم هاتف صحيح مطلوب'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'بريد إلكتروني صحيح مطلوب'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    // محاكاة إرسال — استبدلها بمناداة API لاحقًا
    setTimeout(() => {
      setSubmitting(false)
      setSuccessOpen(true)
      // إعادة تعيين النموذج (أو توجه لصفحة شكراً)
      setForm({
        fullName: '',
        nationalId: '',
        phone: '',
        email: '',
        plan: selectedPlan,
        paymentMethod: 'full',
        files: null
      })
    }, 1800)
  }

  return (
    <div dir='rtl' className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* HERO */}
      <header className="relative">
        <div className="h-64 md:h-72 lg:h-80 relative overflow-hidden">
          <Image
            src="/Fan1zsc.jpg"
            alt="Zamalek hero"
            width={500} 
            height={500}
            className="object-cover w-full h-full brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                انضم إلى <span className="text-red-400">عائلة نادي الزمالك</span>
              </h1>
              <p className="mt-3 text-white/90 text-lg md:text-xl">
                عضويات مصممة لكل عشاق القلعة البيضاء — اختر باقتك وتمتع بمزايا حصرية وخدمات مميزة.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <a href="#plans" className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium shadow-lg transition">
                  استعرض الباقات
                </a>
                <a href="#apply" className="inline-block border border-white/30 text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition">
                  قدّم الآن
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto -mt-12 relative z-10 px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Plans & Benefits */}
          <section className="lg:col-span-2 space-y-6">
            {/* Plans */}
            <section id="plans" className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">باقات العضوية</h2>
                  <p className="text-gray-500 mt-1">اختر الباقة الأنسب لك ولعائلتك</p>
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <span className="text-sm text-gray-500">مقارنة سريعة</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {PLANS.map((p) => (
                  <motion.div
                    key={p.id}
                    onClick={() => { setSelectedPlan(p.id); setForm({ ...form, plan: p.id }) }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.18 }}
                    className={`cursor-pointer rounded-xl p-5 border ${selectedPlan === p.id ? 'border-red-600 shadow-lg' : 'border-gray-100'} bg-gradient-to-b ${p.popular ? 'from-white to-red-50' : 'from-white to-white'}`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{p.short}</p>
                      </div>
                      {p.popular && (
                        <div className="text-xs bg-red-600 text-white px-2 py-1 rounded-full font-semibold">الأكثر شعبية</div>
                      )}
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{p.price}</p>
                        <p className="text-xs text-gray-500">رسوم سنوية</p>
                      </div>
                      <div>
                        <button
                          onClick={() => { setSelectedPlan(p.id); setForm({ ...form, plan: p.id }); document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' }) }}
                          className="bg-red-600 text-white px-4 py-2 rounded-md text-sm shadow hover:bg-red-700 transition"
                        >
                          اختر الباقة
                        </button>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {p.perks.map((perk, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-red-500" /> {perk}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">مزايا العضوية</h3>
              <p className="text-gray-500 mt-1">استمتع بمجموعة من المزايا الحصرية للأعضاء</p>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start gap-4">
                  <Icon><User className="w-5 h-5" /></Icon>
                  <div>
                    <h4 className="font-semibold">دخول المرافق</h4>
                    <p className="text-sm text-gray-500">الوصول لصالات التدريب والملاعب</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon><Users className="w-5 h-5" /></Icon>
                  <div>
                    <h4 className="font-semibold">مزايا عائلية</h4>
                    <p className="text-sm text-gray-500">خصومات وميزات لأفراد الأسرة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon><CreditCard className="w-5 h-5" /></Icon>
                  <div>
                    <h4 className="font-semibold">خيارات دفع مرنة</h4>
                    <p className="text-sm text-gray-500">دفع كامل أو تقسيط حسب الحملة</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon><Calendar className="w-5 h-5" /></Icon>
                  <div>
                    <h4 className="font-semibold">حضور الفعاليات</h4>
                    <p className="text-sm text-gray-500">دعوات خاصة للأعضاء على الفعاليات</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon><Upload className="w-5 h-5" /></Icon>
                  <div>
                    <h4 className="font-semibold">تحميل الوثائق إلكترونياً</h4>
                    <p className="text-sm text-gray-500">رفع المستندات بسهولة عبر النموذج</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon><CheckCircle className="w-5 h-5" /></Icon>
                  <div>
                    <h4 className="font-semibold">خصومات المتجر</h4>
                    <p className="text-sm text-gray-500">خصومات حصرية على المنتجات الرسمية</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Steps */}
            <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold">خطوات التقديم</h3>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { t: 'تعبئة النموذج', d: 'املأ بياناتك الأساسية' },
                  { t: 'رفع المستندات', d: 'ارفق نسخة البطاقة/صورة' },
                  { t: 'الدفع', d: 'اختر طريقة الدفع المناسبة' },
                  { t: 'استلام البطاقة', d: 'استلم بطاقة العضوية بعد الموافقة' }
                ].map((s, i) => (
                  <div key={i} className="p-4 rounded-lg border border-gray-100 bg-gradient-to-b from-white to-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-50 text-red-600 font-bold">{i + 1}</div>
                      <div>
                        <h4 className="font-semibold">{s.t}</h4>
                        <p className="text-sm text-gray-500">{s.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          {/* Right Column: Application Form & Contact */}
          <aside className="space-y-6">
            <div id="apply" className="sticky top-20">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold">قدّم الآن</h3>
                <p className="text-sm text-gray-500 mt-1">املأ البيانات لإكمال طلب العضوية</p>

                <form id="apply-form" onSubmit={handleSubmit} className="mt-4 space-y-3">
                  <div>
                    <label className="text-sm font-medium">الاسم الكامل</label>
                    <input
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none ${errors.fullName ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="أدخل الاسم الكامل"
                    />
                    {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">الرقم القومي</label>
                    <input
                      value={form.nationalId}
                      onChange={(e) => setForm({ ...form, nationalId: e.target.value })}
                      className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none ${errors.nationalId ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="مثال: 12345678901234"
                    />
                    {errors.nationalId && <p className="text-xs text-red-600 mt-1">{errors.nationalId}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">رقم الهاتف</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="مثال: 01012345678"
                    />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">البريد الإلكتروني</label>
                    <input
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`mt-1 w-full px-3 py-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                      placeholder="example@mail.com"
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">نوع العضوية</label>
                    <select
                      value={form.plan}
                      onChange={(e) => { setForm({ ...form, plan: e.target.value }); setSelectedPlan(e.target.value) }}
                      className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none border-gray-200"
                    >
                      {PLANS.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">طريقة الدفع</label>
                    <select
                      value={form.paymentMethod}
                      onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                      className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none border-gray-200"
                    >
                      <option value="full">دفع كامل</option>
                      <option value="installment">تقسيط</option>
                      <option value="bank">تحويل/إيداع بنكي</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">رفع المستندات</label>
                    <input
                      onChange={(e) => setForm({ ...form, files: e.target.files })}
                      type="file"
                      accept="image/*,application/pdf"
                      className="mt-1 w-full text-sm"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white font-medium ${submitting ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'}`}
                    >
                      {submitting ? 'جاري الإرسال...' : 'أرسل طلب العضوية'}
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-xs text-gray-500">
                  <p>بمجرد إرسال النموذج سيتم التواصل معك عبر البريد أو رقم الهاتف لتأكيد الطلب واستكمال الإجراءات.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer CTA */}
        <div className="my-8 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl text-white p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold">جاهز للانضمام؟</h4>
            <p className="text-sm">انقر على "قدّم الآن" لبدء عملية التقديم واستمتع بمزايا العضوية</p>
          </div>
          <div>
            <a href="#apply" className="inline-block bg-white text-red-600 px-5 py-3 rounded-md font-semibold shadow">قدّم الآن</a>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      <AnimateSuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </div>
  )
}

/* ---------- Success Modal Component ---------- */
function AnimateSuccessModal({ open, onClose }) {
  if (!open) return null
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
          <X />
        </button>
        <div className="flex flex-col items-center gap-3 text-center">
          <CheckCircle className="w-16 h-16 text-green-500" />
          <h3 className="text-xl font-bold">تم إرسال طلبك بنجاح</h3>
          <p className="text-sm text-gray-600">شكرًا لك! سنراجع طلبك ونتواصل معك خلال 3-7 أيام عمل.</p>
          <button onClick={onClose} className="mt-3 bg-red-600 text-white px-6 py-2 rounded-md">حسناً</button>
        </div>
      </motion.div>
    </motion.div>
  )
}
