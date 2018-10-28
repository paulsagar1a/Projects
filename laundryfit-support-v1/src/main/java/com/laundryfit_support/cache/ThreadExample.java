package com.laundryfit_support.cache;

public class ThreadExample{
	
	static void threadMessage(String msg){
		String threadName = Thread.currentThread().getName();
		System.out.format("---+ %s: %s%n",threadName,msg);
	}
	
	public static class MessageLoop implements Runnable {

		public void run() {
			String importantInfo[] = {
					"I know thread",
					"Its an excellent java feather",
					"Thread can handle multiple tasks",
					"I love working with Thread"
			};
			
			try{
				for(int i=0;i<importantInfo.length;i++) {
					Thread.sleep(3000);
					threadMessage(importantInfo[i]);
				}
			}catch(InterruptedException e){
				threadMessage("Interruption occurred!");
			}
			
		}
		
	}

	public static void main(String[] args) throws InterruptedException{
		long patience = 1000;
		if(args.length>0) {
			try{
				patience = Long.parseLong(args[0]) * 1000;
			} catch (NumberFormatException e) {
				System.err.println("Argument must be an integer.");
				System.exit(1);
			}
		}
		 threadMessage("Starting MessageLoop thread");
	        long startTime = System.currentTimeMillis();
	        Thread t = new Thread(new MessageLoop());
	        t.start();

	        threadMessage("Waiting for MessageLoop thread to finish");
	        // loop until MessageLoop
	        // thread exits
	        while (t.isAlive()) {
	            threadMessage("Still waiting...");
	            // Wait maximum of 1 second
	            // for MessageLoop thread
	            // to finish.
	            t.join(2000);
	            if (((System.currentTimeMillis() - startTime) > patience)
	                  && t.isAlive()) {
	                threadMessage("Tired of waiting!");
	                t.interrupt();
	                // Shouldn't be long now
	                // -- wait indefinitely
	                t.join();
	            }
	        }
	        threadMessage("Finally!");
	    }
	}
