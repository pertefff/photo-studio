import { Admin, Resource, } from 'react-admin';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import MyLoginPage from './components/LoginPage'
import { WorkersCreate, WorkersEdit, WorkersList } from './components/Workers';
import { OrdersCreate, OrdersEdit, OrdersList } from './components/Orders';
import { HallsCreate, HallsEdit, HallsList } from './components/Halls';
import { QuestionsEdit, QuestionsList } from './components/Questions';
import theme from './theme';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

function App() {

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={MyLoginPage}
      title={"Сепия"}
      theme={theme}
      i18nProvider={i18nProvider}
    >
      <Resource name="orders" icon={ListAltIcon} list={OrdersList} edit={OrdersEdit} create={OrdersCreate} options={{ label: 'Заказы' }} />
      <Resource name="questions" icon={QuestionAnswerIcon} list={QuestionsList} edit={QuestionsEdit} options={{ label: 'Вопросы' }} />
      <Resource name="halls" icon={PhotoCameraBackIcon} list={HallsList} edit={HallsEdit} create={HallsCreate} options={{ label: 'Залы' }} />
      <Resource name="workers" icon={PersonIcon} list={WorkersList} edit={WorkersEdit} create={WorkersCreate} options={{ label: 'Сотрудники' }} />
    </Admin>
  );
}

export default App;