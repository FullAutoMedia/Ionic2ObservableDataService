# Ionic2ObservableDataService
Demonstration of Ionic2 Beta 10 Observable Data Service

<ul>
<li>Install <a href="http://ionicframework.com/docs/v2/getting-started/installation/">Ionic2</a></li>
<li>ionic start MyProject --v2 --ts</li>
<li>cd MyProject</li>
<li>md models</li>
<li>add models/dance-move.ts</li>
<li>ionic generate provider DanceMoveService</li>
<li>providers/dance-move-service/dance-move-service.ts: import { DanceMove } from '../../models/dance-move';</li>
<li>build out dance-move-service.ts </li>
<li>home.ts: import {Observable} from 'rxjs/Observable';</li>
<li>home.ts: import { DanceMove } from '../../models/dance-move';</li>
<li>home.ts: import { DanceMoveService } from '../../providers/DanceMoveService';</li>
<li>home.ts: providers: [DanceMoveService]</li>
<li>home.ts: constructor(private navCtrl: NavController, private svc: DanceMoveService)</li>
<li>build out home.ts</li>
<li>build out home.html</li>
</ul>