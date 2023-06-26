export default function Divider({ theme = "light", classNames }: { theme: string, classNames?: string }) {
    console.log(theme)
    const style = theme == "light" ? "border-b border-gray-100/50" : "border-b border-gray-400/50"
    return <div className={style + " " + classNames}></div>
}