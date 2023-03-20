import reactLogo from './assets/react.svg'
import { UseContextExample } from './components/UseContextExample'
import { UseEffectExample } from './components/UseEffectExample'
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
    
      </div>
    </ContextProvider>
  )
}

export default App
