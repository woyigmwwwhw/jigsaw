import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {TableBasicDemoComponent} from "./basic/basic";
import {TableRendererDemoComponent} from "./renderer/renderer";
import {RdkTableModule, DefaultCellRenderer} from "../../../../component/table/table";
import {
    TableHeadCheckbox,
    TableCellCheckbox,
    TableCellOption,
    TableHeadOption,
    TableCellNum,
    TableHeadNum
} from "../../../../component/table/table-renderer";
import {TableCheckboxService} from "../../../../component/table/table-service";
import {TableHead, TableCell, TableHeadSelect, TableCellEditor} from "./renderer/table-renderer";
import {RdkSelectModule} from "../../../../component/select/select";
import {RdkCheckBoxModule} from "../../../../component/checkbox/index";
import {RdkPaginationModule} from "../../../../component/pagination/pagination";
import {RdkInputModule} from "../../../../component/input/input";

const tableDemoRoutes = [
    {
        path: '', redirectTo: 'basic', pathMatch: 'full'
    },
    {
        path: 'basic', component: TableBasicDemoComponent
    },
    {
        path: 'renderer', component: TableRendererDemoComponent
    },
    {
        path: '**', //fallback router must in the last
        component: TableBasicDemoComponent
    }
];

@NgModule({
    declarations: [
        TableBasicDemoComponent,
        TableRendererDemoComponent,
        DefaultCellRenderer,
        TableHead,
        TableCell,
        TableHeadSelect,
        TableHeadCheckbox,
        TableCellCheckbox,
        TableCellOption,
        TableHeadOption,
        TableCellNum,
        TableHeadNum,
        TableCellEditor
    ],
    imports: [
        RouterModule.forChild(tableDemoRoutes),
        RdkTableModule,
        RdkSelectModule,
        RdkCheckBoxModule,
        RdkPaginationModule,
        RdkInputModule
    ],
    exports: [
        TableBasicDemoComponent, TableRendererDemoComponent
    ],
    providers: [TableCheckboxService],
    entryComponents: [
        DefaultCellRenderer,
        TableHead,
        TableCell,
        TableHeadSelect,
        TableHeadCheckbox,
        TableCellCheckbox,
        TableCellOption,
        TableHeadOption,
        TableCellNum,
        TableHeadNum,
        TableCellEditor
    ]
})
export class TableDemoModule {
}
