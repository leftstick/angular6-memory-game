import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { enableProdMode } from '@angular/core'
import { environment } from './environments/environment'
import { MemoryModule } from './memorygame/memory.module'

if (environment.production) {
  enableProdMode()
}

platformBrowserDynamic().bootstrapModule(MemoryModule)

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))
