// @dynamic
export function foo(_test: any) {
	return (_target: any, _name: string, _descriptor: PropertyDescriptor) => { };
}

export class Foo {

	@foo(() => "")
	bar() {
		// stub
	}

}