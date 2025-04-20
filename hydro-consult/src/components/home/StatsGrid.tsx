const stats = [
    { icon: 'history', label: '30+ Year History' },
    { icon: 'globe',   label: '5 Countries' },
    { icon: 'currency',label: '210M Revenue' },
    { icon: 'users',   label: '150 Employees' },
  ]
  
  export default function StatsGrid() {
    return (
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-16">
        {stats.map(s => (
          <div key={s.label}>
            <Icon name={s.icon} className="mx-auto h-8 text-primary" />
            <p className="mt-2 font-semibold">{s.label}</p>
          </div>
        ))}
      </div>
    )
  }
  