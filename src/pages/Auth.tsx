import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, MapPin } from "lucide-react";
import { states } from "@/utils/mockData";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center p-4">
      <ScrollReveal>
        <div className="card-elevated p-6 w-full max-w-sm">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to ElectPulse</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-10 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
                required
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 text-xs cursor-pointer">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="rounded border-border" />
                Remember me
              </label>
              <button type="button" className="text-xs text-chakra-blue hover:underline">Forgot password?</button>
            </div>

            <button type="submit" className="w-full py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]">
              Sign In
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-chakra-blue hover:underline font-medium">Sign up</Link>
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}

export function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "", state: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (form.password.length < 6) e.password = "Min 6 characters";
    if (form.password !== form.confirm) e.confirm = "Passwords don't match";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Mock signup
    }
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] flex items-center justify-center p-4">
      <ScrollReveal>
        <div className="card-elevated p-6 w-full max-w-sm">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold">Create Account</h1>
            <p className="text-sm text-muted-foreground mt-1">Join ElectPulse analytics</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
              {errors.name && <p className="text-[10px] text-destructive mt-0.5">{errors.name}</p>}
            </div>

            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
              {errors.email && <p className="text-[10px] text-destructive mt-0.5">{errors.email}</p>}
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full pl-9 pr-10 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-[10px] text-destructive mt-0.5">{errors.password}</p>}
            </div>

            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={form.confirm}
                  onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                  className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
              {errors.confirm && <p className="text-[10px] text-destructive mt-0.5">{errors.confirm}</p>}
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <select
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20 appearance-none"
              >
                <option value="">Select State (optional)</option>
                {states.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <button type="submit" className="w-full py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity active:scale-[0.97]">
              Create Account
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-chakra-blue hover:underline font-medium">Sign in</Link>
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}
