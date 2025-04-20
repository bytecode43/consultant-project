export default function Footer() {
    return (
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-2">Project</h4>
            <ul className="space-y-1">
              <li><a href="/projects/international">International</a></li>
              <li><a href="/projects/national">National</a></li>
            </ul>
          </div>
          {/* About Us, Important Links, Contact Us columns */}
        </div>
      </footer>
    )
  }
  