import reactLogo from './assets/react.svg'
import { UseCallbackExample } from './components/UseCallbackExample'
import { UseContextExample } from './components/UseContextExample'
import { UseEffectExample } from './components/UseEffectExample'
import { UseMemoExample } from './components/UseMemoExample'
import { UseReducerExample } from './components/UseReducerExample'
import { UseRefExample } from './components/UseRefExample'
import { UseStateExample } from './components/UseStateExample'
import { HookSection } from './components/Wrappers/HookSection'
import { ContextProvider } from './context/ContextProvider'

function App() {

  return (
    <ContextProvider>
      <div className="App">
    
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
    
        <h1 className='font-bold mb-8'>Hooks Examples with React + TS</h1>
    
        <HookSection title='UseState' desc='The most basic example: An accountant'>
          <UseStateExample />
        </HookSection>
    
        <HookSection title='UseEffect' desc='Fetching data from an API'>
          <UseEffectExample />
        </HookSection>
    
        <HookSection title='UseContext' desc='Avoid drilling props with Context'>
          <UseContextExample />
        </HookSection>
        
        <HookSection title='UseReducer' desc='Accountant to manage different states with Reducer'>
          <UseReducerExample />
        </HookSection>
        
        <HookSection title='UseRef' desc='Setting focus on an input'>
          <UseRefExample />
        </HookSection> 
        
        <HookSection title='UseMemo' desc='Setting focus on an input'>
          <UseMemoExample />
        </HookSection> 
        
        <HookSection title='UseCallback' desc='Setting focus on an input'>
          <UseCallbackExample />
        </HookSection> 
    
      </div>
    </ContextProvider>
  )
}

export default App
