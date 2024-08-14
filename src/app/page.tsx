import GoogleMap from '../components/GoogleMap';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Bem-vindo ao site de Ciclovias de Cabo Frio!</h2>
      <p className="mb-4">
        Aqui você encontrará um mapa personalizado com todas as ciclovias do município de Cabo Frio/RJ. 
        Use o mapa abaixo para explorar e encontrar ciclovias perto de você.
      </p>
      
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1owpTltrHh-uJ0sKmGmsQK1ZSl3mn814&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
    </div>
  );
};

export default Home;
