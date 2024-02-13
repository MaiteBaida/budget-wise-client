import EssentialExpenses from '../../components/EssentialExpenses/EssentialExpenses';
import FixedExpenses from '../../components/FixedExpenses/FixedExpenses';
import NonEssentialExpenses from '../../components/NonEssentialExpensesTable/NonEssentialExpenses';
import './HomePage.scss';


function HomePage() {
    return (
      <main className="home">
        <FixedExpenses />
        <EssentialExpenses />
        <NonEssentialExpenses />
      </main>
    );
  }
  
  export default HomePage;