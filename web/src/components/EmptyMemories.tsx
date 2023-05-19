export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, começa{' '}
        <a href="" className="underline hover:text-gray-50">
          criar agora
        </a>
        !
      </p>
    </div>
  )
}
