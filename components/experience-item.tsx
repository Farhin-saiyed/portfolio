interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string[]
}

export default function ExperienceItem({ title, company, period, description }: ExperienceItemProps) {
  return (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:content-[''] after:absolute after:left-[5px] after:top-8 after:w-[1px] after:h-[calc(100%-24px)] after:bg-gray-800 after:content-['']">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 mb-2">
        {company} | {period}
      </p>
      <ul className="list-disc list-inside space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

