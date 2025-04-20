export default function ContactForm() {
    return (
      <form className="space-y-4 p-8 bg-white rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Full Name" className="input" />
          <input placeholder="Company"   className="input" />
          <input placeholder="Email"     className="input" />
          <input placeholder="Phone"     className="input" />
        </div>
        <textarea placeholder="Message" className="input h-32"></textarea>
        <button type="submit" className="btn-primary w-full">Send</button>
      </form>
    )
  }
  