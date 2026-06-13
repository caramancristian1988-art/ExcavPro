interface Props {
  html: string
}

export default function BlogContent({ html }: Props) {
  return (
    <div
      className="prose-excavator font-body text-[#9A9590] leading-relaxed max-w-none
        [&_h2]:font-display [&_h2]:font-black [&_h2]:uppercase [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-[#F0EDE8] [&_h2]:mt-8 [&_h2]:mb-4
        [&_h3]:font-display [&_h3]:font-bold [&_h3]:uppercase [&_h3]:text-xl [&_h3]:tracking-tight [&_h3]:text-[#F0EDE8] [&_h3]:mt-6 [&_h3]:mb-3
        [&_p]:mb-4 [&_p]:text-[#9A9590]
        [&_ul]:mb-4 [&_ul]:space-y-2 [&_ul]:pl-0 [&_ul]:list-none
        [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-2 [&_ul_li]:before:content-['▸'] [&_ul_li]:before:text-[#F5A623] [&_ul_li]:before:font-bold [&_ul_li]:before:shrink-0 [&_ul_li]:before:mt-0.5
        [&_strong]:text-[#F0EDE8] [&_strong]:font-bold
        [&_a]:text-[#F5A623] [&_a]:hover:text-[#D4891C] [&_a]:transition-colors"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
