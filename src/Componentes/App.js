import Navbar from './Navbar';
import Esquerda from './Esquerda';
import Sidebar from './Sidebar';

export default function App(){
    return (
    <div>
      <Navbar />
      <div class="corpo">
        <Esquerda />
        <Sidebar />
      </div>
    </div>
    );
}

