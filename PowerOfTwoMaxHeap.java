import java.util.Arrays;
import java.util.NoSuchElementException;

/**
 * A highly performant Max Heap implementation where every parent node 
 * has exactly 2^childrenExponent children.
 */
public class PowerOfTwoMaxHeap {
    private int[] heapArray;
    private int size;
    private final int childrenExponent;
    private final int childrenPerNode;

    /**
     * Constructor to initialize the heap.
     * 
     * @param childrenExponent The power 'x' determining the number of children (2^x).
     *                         Must be greater than or equal to 0.
     */
    public PowerOfTwoMaxHeap(int childrenExponent) {
        if (childrenExponent < 0) {
            throw new IllegalArgumentException("Children exponent cannot be negative.");
        }
        // If childrenExponent is too large, 1 << childrenExponent will overflow.
        if (childrenExponent >= 31) {
            throw new IllegalArgumentException("Children exponent is too large and would cause integer overflow.");
        }
        
        this.childrenExponent = childrenExponent;
        this.childrenPerNode = 1 << childrenExponent; // Fast calculation of 2^x
        this.heapArray = new int[16]; // Default initial capacity
        this.size = 0;
    }

    /**
     * Inserts a new value into the max heap.
     * Time Complexity: O(log_{2^x} N)
     * 
     * @param value The integer value to insert.
     */
    public void insert(int value) {
        ensureCapacity();
        heapArray[size] = value;
        size++;
        siftUp(size - 1);
    }

    /**
     * Removes and returns the maximum value from the heap.
     * Time Complexity: O(2^x * log_{2^x} N)
     * 
     * @return The maximum integer value in the heap.
     * @throws NoSuchElementException If the heap is empty.
     */
    public int popMax() {
        if (size == 0) {
            throw new NoSuchElementException("Heap is empty.");
        }
        
        int maxValue = heapArray[0];
        heapArray[0] = heapArray[size - 1];
        size--;
        
        if (size > 0) {
            siftDown(0);
        }
        
        return maxValue;
    }

    /**
     * Restores the max heap property by moving an element upward.
     */
    private void siftUp(int index) {
        int insertedValue = heapArray[index];
        
        // Edge Case: Handling x = 0 (1 child). 
        // Standard formula works, but if x = 0, parent index is simply (index - 1).
        while (index > 0) {
            int parentIndex = (index - 1) >>> childrenExponent; // Fast division by 2^x
            
            if (insertedValue <= heapArray[parentIndex]) {
                break;
            }
            
            heapArray[index] = heapArray[parentIndex];
            index = parentIndex;
        }
        heapArray[index] = insertedValue;
    }

    /**
     * Restores the max heap property by moving an element downward.
     */
    private void siftDown(int index) {
        int targetValue = heapArray[index];
        
        while (true) {
            // Find the index range of the current node's children
            // Leftmost child index: parentIndex * 2^x + 1
            int firstChildIndex = (index << childrenExponent) + 1; 
            
            if (firstChildIndex >= size) {
                break; // Node has no children, reached the bottom
            }
            
            int maxChildIndex = firstChildIndex;
            int lastChildIndex = Math.min(firstChildIndex + childrenPerNode, size);
            
            // Linear scan across the child block to find the maximum child
            for (int i = firstChildIndex + 1; i < lastChildIndex; i++) {
                if (heapArray[i] > heapArray[maxChildIndex]) {
                    maxChildIndex = i;
                }
            }
            
            // If the parent is already greater than or equal to the largest child, we are done
            if (targetValue >= heapArray[maxChildIndex]) {
                break;
            }
            
            heapArray[index] = heapArray[maxChildIndex];
            index = maxChildIndex;
        }
        heapArray[index] = targetValue;
    }

    /**
     * Dynamically resizes the primitive backing array when full.
     */
    private void ensureCapacity() {
        if (size == heapArray.length) {
            // Scale array length up by 1.5x to balance memory usage and reallocation cost
            int newCapacity = heapArray.length + (heapArray.length >> 1);
            heapArray = Arrays.copyOf(heapArray, newCapacity);
        }
    }

    /**
     * Utility method to get current element count.
     */
    public int getSize() {
        return this.size;
    }
}
