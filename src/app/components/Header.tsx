import { IconButton } from "./shared/IconButton";
import { FiSettings } from "react-icons/fi";

const getWelcome = () => {
  const date = new Date();
    const hour = date.getHours();

    if (hour >= 6 && hour < 12) {
      return 'Bom dia! 😇';
    }
    if (hour >= 12 && hour < 18) {
      return 'Boa tarde! 😎';
    }
    if (hour >= 18 && hour < 24) {
      return 'Boa noite! 🤩';
    }
    return 'Boa madrugada! 🧑‍💻';
} 

export function Header() {
  const welcome = getWelcome();

  return (
    <header className="p-8 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-50">{ welcome }</h1>
        <p className="text-sm text-zinc-100">Keep it Simple.</p>
      </div>

      <div>
        <IconButton icon={<FiSettings />} className="text-lg text-zinc-200 hover:text-zinc-50" />
      </div>

      
    </header>
  )
}