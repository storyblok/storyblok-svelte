import { SbBlokData } from './index'
import { SvelteComponentTyped} from 'svelte'

export * from "./index"

interface StoryblokComponentProps {
    blok: SbBlokData;
}

export declare class StoryblokComponent extends SvelteComponentTyped<StoryblokComponentProps> {
}