import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { PlayGameComponent } from './components/play-game/play-game.component';

const routes: Routes = [
  { path: 'newGame', /*redirectTo: '',*/ component: StartGameComponent },
  { path: 'playGame', /*redirectTo: '',*/ component: PlayGameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
