export class Node {
  childNodes: Node[];
  readonly children: Node[];
  readonly firstChild: Node | null;
  readonly lastChild: Node | null;
  readonly nodeName: string;
  readonly nodeValue: any;

  cloneNode (deep?: boolean): Node;
}
