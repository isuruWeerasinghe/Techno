import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Info */}
          <div className="lg:w-1/2">
            <span className="text-electric font-bold tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl mb-8">
              Let’s Build Your <br />
              <span className="text-electric">Infrastructure Together</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Have a project in mind? Our specialized departments are ready to assist you with a tailored proposal.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-electric shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Head Office</div>
                  <div className="text-white/60 text-sm leading-relaxed">
                    No24/2/1, Hirigalgodella,<br />
                    Payagala, Kaluthara.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-electric shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Call Us</div>
                  <div className="text-white/60 text-sm leading-relaxed">
                    0756394934<br />
                    0779457812<br />
                    0782802220
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-electric shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-bold mb-1">Email Us</div>
                  <div className="text-white/60 text-sm leading-relaxed">
                    info@technosolutions.lk<br />
                    technosolutions4@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-electric/10 border border-electric/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-electric flex items-center justify-center">
                <MessageSquare size={20} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-sm">Need immediate assistance?</div>
                <button className="text-electric text-sm font-bold hover:underline">Chat with us on WhatsApp</button>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-navy mb-8">Request a Proposal</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Full Name</label>
                    <Input placeholder="John Doe" className="bg-light-grey border-none h-12 text-navy" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Company</label>
                    <Input placeholder="Telecom Co." className="bg-light-grey border-none h-12 text-navy" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Email Address</label>
                    <Input type="email" placeholder="john@company.com" className="bg-light-grey border-none h-12 text-navy" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Service Needed</label>
                    <Select>
                      <SelectTrigger className="bg-light-grey border-none h-12 text-navy">
                        <SelectValue placeholder="Select Service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="saq">Site Acquisition</SelectItem>
                        <SelectItem value="civil">Civil Works</SelectItem>
                        <SelectItem value="electrical">Electrical Solutions</SelectItem>
                        <SelectItem value="logistics">Logistics & IT</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-navy/40 uppercase tracking-widest">Message</label>
                  <Textarea placeholder="Tell us about your project requirements..." className="bg-light-grey border-none min-h-[120px] text-navy" />
                </div>

                <Button className="w-full bg-electric hover:bg-electric/90 py-7 text-lg font-bold">
                  Send Inquiry
                  <Send className="ml-2" size={18} />
                </Button>
                
                <p className="text-center text-xs text-navy/30">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
