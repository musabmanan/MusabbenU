public class StringNode {

    String value;
    StringNode next;
    public StringNode(){
        this.value = value;
        next = null;
    }
    public StringNode(String value, StringNode next){
        this.value = value;
        this.next = next;
    }
    public  String getValue(){
        return this.value;
    }
    public StringNode getNext(){
        return this.next;
    }
    private void setValue(String value){
        this.value = value;
    }
    public void setNext(StringNode next){
        this.next = next;
    }

}
