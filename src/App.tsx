import { Header } from './components'
import { TasksPage, AboutUsPage, UserInfoPage, NotFoundPage, GeneralSettingsPage } from './pages'
import { useNavigation, useTodos } from './hooks'
import { APP_CONFIG } from './constants'

function App() {
  const { currentPage, navigateTo, navigateToNotFound, navigateToUserInfo } = useNavigation(APP_CONFIG.defaultPage);
  const {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    markAllDone,
    markAllUndone,
    clearCompleted,
  } = useTodos();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'tasks':
        return (
          <TasksPage 
            todos={todos}
            addTodo={addTodo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            markAllDone={markAllDone}
            markAllUndone={markAllUndone}
            clearCompleted={clearCompleted}
          />
        );

      case 'about':
        return <AboutUsPage onNavigateToNotFound={navigateToNotFound} />;

      case 'userinfo':
        return <UserInfoPage />;
      case 'generalsettings':
        return <GeneralSettingsPage />;
      case 'notfound':
        return <NotFoundPage onNavigateHome={navigateToUserInfo} />;

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      {renderCurrentPage()}
    </div>
  );
}

export default App
