import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function PortfolioIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-500 flex items-center justify-center p-6">
      <motion.div
        className="max-w-3xl w-full text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Card className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img
              src="/assets/adrian-profile.png"
              alt="Adrian Kim D. Requillo"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold">Adrian Kim D. Requillo</h1>
              <p className="mt-2 text-lg text-white/90">
                Fullstack Web & Software Developer | MIS Office, Ateneo de Davao University
              </p>
              <p className="mt-4 text-white/80">
                I am a fullstack developer at Ateneo de Davao University with a strong background in
                building secure, efficient, and user-centered systems from scratch. I have developed and
                maintained university-wide platforms such as:
              </p>
              <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                <li><strong>Enrollment System</strong> (undergrad, grad, law) — <a href="https://enrollment.addu.edu.ph" className="underline">enrollment.addu.edu.ph</a></li>
                <li><strong>Centralized Office Management</strong> — <a href="https://account-uan.addu.edu.ph" className="underline">account-uan.addu.edu.ph</a></li>
                <li><strong>Booking Management System</strong> — <a href="https://booking.addu.edu.ph" className="underline">booking.addu.edu.ph</a></li>
                <li><strong>AD Account Creation (LDAP)</strong></li>
                <li><strong>Online Payment System</strong> — <a href="https://payments.addu.edu.ph" className="underline">payments.addu.edu.ph</a></li>
                <li><strong>Beadle System</strong> — <a href="https://beadle.addu.edu.ph" className="underline">beadle.addu.edu.ph</a></li>
                <li><strong>Law School System</strong> — <a href="https://lawsys.addu.edu.ph" className="underline">lawsys.addu.edu.ph</a></li>
                <li><strong>RFID/QR-based Attendance API Integration</strong></li>
                <li><strong>Seminar QR Attendance Automation</strong> under HR</li>
                <li><strong>Employee Development System</strong> — <a href="https://rise.addu.edu.ph" className="underline">rise.addu.edu.ph</a></li>
              </ul>
              <p className="mt-4 text-white/80">
                My focus is on creating sustainable digital solutions that improve institutional processes,
                while ensuring performance, security, and maintainability. I’m a graduate of BSIT at Ateneo
                de Davao and currently pursuing my Master of Science in Information Technology.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
