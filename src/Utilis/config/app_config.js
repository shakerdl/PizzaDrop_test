import Slice from '../../components/Slice/slice';
import Box from '../../components/box/box';

// {
//     selector:"slice-pizza",
//     component:Slice
// }
export const Config = {
    components: [
        [
            "slice-pizza", Slice
        ],
        [
            "box-pizza", Box
        ]
    ]
}