import { JsonClassType, JsonIdentityInfo, JsonProperty, ObjectIdGenerator } from '@outfoxx/jackson-js';


@JsonIdentityInfo({generator: ObjectIdGenerator.IntSequenceGenerator, property: '@id', scope: 'Book'})
export class Book {

    @JsonClassType({type: () => [Number]})
    @JsonProperty() id: number;

}
