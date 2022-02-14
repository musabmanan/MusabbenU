public class MyStringLinkedList  implements MyStringList {
    static StringNode head;

    public static void add(String value) {
        StringNode node = new StringNode();
        node.value = value;
        node.next = null;

        if (head == null) {
            head = node;
        } else {
            StringNode n = head;
            while (n.next != null) {
                n = n.next;
            }
            n.next = node;
        }

    }


    public StringNode remove() {

        if (head == null)
            return null;

        if (head.next == null) {
            return null;
        }

      
        StringNode last = head;
        StringNode second_last = null;
        while (last.next != null) {
            second_last = last;
            last = last.next;
        }

        second_last.next = null;

        return last;
    }


    public static void clear() {
        head = null;
    }


    public int size() {
        if (head == null) {
            return 0;
        }
        int count = 0;
        StringNode n = head;
        while (n != null) {
            count++;
            n = n.getNext();
        }
        return count;
    }
}
