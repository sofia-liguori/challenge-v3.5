import Modal from "@/components/Modal"

export default function Header() {
    return(
        <div className="flex justify-center w-full px-10">
        <div className="flex justify-between items-center w-full max-w-3xl">
            <h1>Anime Information Portal</h1>
            <Modal />
        </div>
        </div>
    )
}